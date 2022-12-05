import React, {FC} from 'react';
import classes from "./CellComponents.module.scss"
import {Cell} from "../../models/Cell";

interface CellProps {
    cell: Cell
}

const CellComponents: FC<CellProps> = ({cell}) => {
    return (
        <div className={`${classes.Cell} ${cell.color}`}>
            {cell.figure}
        </div>
    );
};

export default CellComponents;