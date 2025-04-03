import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "./filter-slice";

export const FilterTodo = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);

    const handleFilter = (val) => dispatch(setFilter(val));

    return (
        <div>
            <button
                style={{
                    backgroundColor:
                        activeFilter === "all" ? "black" : "lightgray",
                    marginTop: 6,
                }}
                onClick={() => handleFilter("all")}
            >
                all
            </button>
            <button
                style={{
                    backgroundColor:
                        activeFilter === "active" ? "black" : "lightgray",
                    marginTop: 6,
                }}
                onClick={() => handleFilter("active")}
            >
                active
            </button>
            <button
                style={{
                    backgroundColor:
                        activeFilter === "completed" ? "black" : "lightgray",
                    marginTop: 6,
                }}
                onClick={() => handleFilter("completed")}
            >
                completed
            </button>
        </div>
    );
};
