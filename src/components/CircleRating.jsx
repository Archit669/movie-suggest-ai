import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
    return (
        <div className="inline-block absolute top-40 left-3  w-12 bg-black rounded-full">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;
