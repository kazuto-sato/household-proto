import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/theme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Transaction } from './types/index';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { format } from 'date-fns';
import { formatMonth } from './utils/formatting';

function App() {
  //firestoreのエラーかどうかを判別する形ガード
  function isFireStoreError(err: unknown):err is {code: string,message: string}{
    return typeof err === "object" && err !== null && "code" in err
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const fetchTransactions = async () => {
      try{
        const querySnapshot = await getDocs(collection(db, "Transactions"));

        //配列で取得したいのでmapで回す
        const transactionsData = querySnapshot.docs.map((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          return {
            ...doc.data(),
            id: doc.id,
          } as Transaction; //型アサーション transaction型であるとtypescriptに伝える
        });

        console.log(transactionsData);
        setTransactions(transactionsData);

      } catch (err) {
        //firestoreからのエラーかその他一般的なエラーかを判別する
        if(isFireStoreError(err)){
          console.error("firebaseのエラー：",err);
        }else{
          console.error("一般的なエラー:",err);
        }
          
      }
    }
    fetchTransactions();

  },[]);

  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth));  //formatMonth関数でyyyy-MMの形に変換
  })
  console.log(monthlyTransactions);

  return (
    <ThemeProvider theme={theme}>
      {/* これはリセットcssみたいなやつ↓ */}
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={ <AppLayout /> }>
            <Route index element={ <Home monthlyTransactions={monthlyTransactions}/> }/>
            <Route path="/report" element={ <Report /> }/>
            <Route path="*" element={ <NoMatch /> }/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
