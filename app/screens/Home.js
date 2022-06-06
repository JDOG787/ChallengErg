import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import styles from '../styles/global';
import Summary from '../components/Summary';
import TopBar from '../components/TopBar';
import PageContainer from '../components/PageContainer';
import { LinearGradient, MaskedView } from 'react-native-linear-gradient';
import Title from '../components/Title';
import Modal from "react-native-modal";
import { backgroundSecondaryDefault } from '../lib/colors';
import { getLogs, getPastWeek } from '../lib/functions';
import Loader from '../components/Loader';

export default function Home() {
    const auth = useContext(AuthContext);
    const [lastWeek, setLastWeek] = useState();

    useEffect(() => {
        getLogs(auth.authData).then(res => {
            console.log("logs", res.data)
        })
        getPastWeek(auth.authData).then(res => {
            const logs = res.logs;
            const week = [0, 0, 0, 0, 0, 0, 0];
            const firstDay = new Date(logs.map(l => l.date).sort()[0]);

            for (let i = 0; i < 7; i ++) {
                const day = new Date(firstDay.getTime() + i * 24 * 60 * 60 * 1000);
                // console.log(day);
                for (let x = 0; x < res.logs.length; x++) {
                    if (new Date(logs[x].date).getDate() === day.getDate()) {
                        console.log(day.getDate(), new Date(logs[x].date).getDate(), i);
                        // if (week[i]) {
                        //     week[i] += logs[x].distance;
                        // } else {
                        //     week.push(res.logs[x].distance);
                        //     console.log(week[i])
                        // }
                        // week.push(i);
                        week[i] += logs[x].distance;
                    }
                }
            }
            console.log(week);
            setLastWeek(week);
       
        });
    }, []);

    return (
        // <View style={styles.page}>
        <PageContainer>

            <Title/>
            {
                lastWeek ? <Summary logs={lastWeek.map(d => d/1000)}/>
                : <Loader/>
            }
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
      
        </PageContainer>
        // </View>
    );
}