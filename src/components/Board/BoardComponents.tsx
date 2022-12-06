import React, {FC} from 'react';
import {Board} from "../../models/Board";
import CellComponents from "../Cell/CellComponents";
import classes from "./BoardComponents.module.scss"

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponents:FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className={classes.Board}>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponents
                            cell={cell}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponents;