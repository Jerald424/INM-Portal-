import React, { lazy, Suspense } from "react";
import Select from "react-select";
import ChartData from "./ChartData";
import "./dashboard.css";
import StudentCard from "./dashboardComponents/StudentCard";

export default function Dashboard() {
  const CollageOptions = [
    { value: "DBCY", label: "DBCY" },
    { value: "sacred_heart", label: "Sacred Heart" },
    { value: "rks", label: "RKS" },
  ];
  const collectionOfYear = [63784, 83338, 19230, 92920, 49292];
  const labelsForCollection = ["Jan", "March", "May", "Aug", "Dec"];
  const studentMark = [73, 34, 43, , 34, 32];
  // =====collage-details=====
  const collageDetails = [
    {
      collageName: "DBCY",
      place: "yelagiri",
      count: 73827,
      badgeNumber: "63%",
      badgeColor: "red",
      imgLink:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    },

    {
      collageName: "Jain Collage",
      place: "Chennai",
      count: 73827,
      badgeNumber: "93%",
      badgeColor: "dark",
      imgLink:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    },

    {
      collageName: "Sacred Heart",
      place: "Thiruppatur",
      count: 65548,
      badgeNumber: "90%",
      badgeColor: "success",
      imgLink:
        "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },

    {
      collageName: "RKS",
      place: "Indili",
      count: 23234,
      badgeNumber: "63%",
      badgeColor: "info",
      imgLink:
        "https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    },

    {
      collageName: "Lakshmi",
      place: "Bangaram",
      count: 278027,
      badgeNumber: "23%",
      badgeColor: "success",
      imgLink:
        "https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      collageName: "Lakshmi",
      place: "Bangaram",
      count: 278027,
      badgeNumber: "23%",
      badgeColor: "success",
      imgLink:
        "https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      collageName: "Lakshmi",
      place: "Bangaram",
      count: 278027,
      badgeNumber: "23%",
      badgeColor: "success",
      imgLink:
        "https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      collageName: "Lakshmi",
      place: "Bangaram",
      count: 278027,
      badgeNumber: "23%",
      badgeColor: "success",
      imgLink:
        "https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div className="total-dashboard-design">
      <div className="dashboard-select" id="collage-select">
        <Select options={CollageOptions} className="select" />
        <Select options={CollageOptions} className="select" />
        <Select options={CollageOptions} className="select" />
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-4 m-0 p-0">
          <div className="staff-student-card">
            <StudentCard
              staffCount={5272}
              catagory={"Staff"}
              teachingCount={4353}
              teaching={"Teaching"}
              nonTeachingCount={535}
              nonTeaching={"Non Teaching"}
            />
            <StudentCard
              staffCount={12526}
              catagory={"Student"}
              teachingCount={32324}
              teaching={"Male"}
              nonTeachingCount={46676}
              nonTeaching={"Female"}
            />
            <StudentCard
              staffCount={5272}
              catagory={"Staff"}
              teachingCount={4353}
              teaching={"Teaching"}
              nonTeachingCount={535}
              nonTeaching={"Non Teaching"}
            />
          </div>
        </div>
        <div className="col-md-4 m-0 p-0">
          <div className="total-chart">
            <ChartData
              dataArray={collectionOfYear}
              label={labelsForCollection}
              type="bar"
            />
            <ChartData
              dataArray={studentMark}
              label={labelsForCollection}
              type="round"
            />
          </div>
        </div>
        <div className="col-md-4 m-0 p-0 dashboard-right-part">
          <div className="total-institution mt-3">
            <h6 className="heading-h6">Total Institution</h6>
            <div className="headings">
              <h6 className="institutions-h6">Institution</h6>
              <h6 className="institutions-h6">Count</h6>
            </div>
            <div className="maping-result">
              {collageDetails?.map((res) => {
                return (
                  <>
                    <div className="seperate-college">
                      <div className="image-name">
                        <img src={res?.imgLink} />

                        <div className="collage-name-place">
                          <h6>{res?.collageName}</h6>
                          <p>{res?.place}</p>
                        </div>
                      </div>
                      <div className="student-count">
                        <h5>{res?.count}</h5>
                        <p className={`bg-${res.badgeColor}`}>
                          {res?.badgeNumber}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
