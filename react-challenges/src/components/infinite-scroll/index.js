import { useState, useCallback } from "react";
import InfiniteScroll from "./components/InfiniteScroll.js";

export default function InfiniteScrollChallenge() {
  const [data, setData] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  const loadMoreData = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setData((data) => {
        let newData = [...data];
        newData.push(newData.length + 1);
        newData.push(newData.length + 1);
        newData.push(newData.length + 1);
        newData.push(newData.length + 1);
        return newData;
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <InfiniteScroll endReached={loadMoreData}>
      {data.map((d) => (
        <p key={d} style={{ fontSize: 100 }}>
          {d}
        </p>
      ))}
      {loading && <p>Loading....</p>}
    </InfiniteScroll>
  );
}
