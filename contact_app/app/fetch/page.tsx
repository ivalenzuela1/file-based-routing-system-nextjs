import Layout from "../../components/Layout";
import { getActivities } from "../api/strava";
// import {styles } from "../styles/global.css";

export default async function FetchData() {
  const results = await getActivities();
  const test = results.map((result) => {
    console.log(result);
  });

  return (
    <Layout>
      <div>DATA</div>
      <div>
        {results.map((result) => {
          return (
            <div className="card">
              <div>Date: {result.start_date}</div>
              <div>Type: {result.name}</div>
              <div>Distance: {result.distance}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
// <div>{JSON.stringify({ results })}</div>
//  <div className={styles.card}>
