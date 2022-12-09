import React, {useEffect, useState} from 'react';
import {testAPI} from "../../sevices/test";
import classes from "./Home.module.scss"
import Layout from "../../components/@UI/Layout";
import BoardComponents from "../../components/Board/BoardComponents";
import {Board} from "../../models/Board";

const Index = () => {
    const {data: test, isLoading, error} = testAPI.useFetchAllTestQuery('')
    const [board, setBoard] = useState(new Board())
    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        const newBoard = new Board()
        newBoard.initCells()
        setBoard(newBoard)
    }

    return (
        <Layout>
            {/*{isLoading && <h1>Loading...</h1>}*/}
            {/*{error && <h2>Error...</h2>}*/}
            {/*{test && test.map(test =>*/}
            {/*    <div key={test.id}>*/}
            {/*        {test.id}*/}
            {/*        {test.body}*/}
            {/*    </div>*/}
            {/*)}*/}

            <BoardComponents
                board={board}
                setBoard={setBoard}
            />

        </Layout>
    );
};

export default Index;