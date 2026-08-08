import { useEffect } from "react";
import { loadVisitCount } from "@/ts/visitCounter";


export default function VisitCounter() {
  useEffect(() => {
    loadVisitCount();
  }, []);

  return (
    <div className="w3-main" style={{ marginTop: "-20px !important"}}>
      <hr className="hr-main-body" />
      <section id="counter" className="w3-container">
        <h5>Total website visits: <span id="visit-count">Loading...</span></h5>
      </section>
    </div>
  )
}