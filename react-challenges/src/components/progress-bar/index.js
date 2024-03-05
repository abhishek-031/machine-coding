import { useCallback, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";
let prog = 0.1;

export default function ProgressBarChallenge() {
  const [progress, setProgress] = useState(prog);

  const callback = () => {
    // console.log(progress);
    if (prog < 100) {
      // console.log(progress);
      setProgress(prog + 1);
      prog = prog + 1;
      setTimeout(callback, 100);
    }
  };

  const onClick = useCallback(() => {
    setTimeout(callback, 1000);
  }, []);
  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={onClick}>Start</button>
    </div>
  );
}
