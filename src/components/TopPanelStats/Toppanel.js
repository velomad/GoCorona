import React from 'react';
import './toppanel.css';
import AppUpdated from '../AppUpdated/appUpdated.js';
import Bar from '../GraphsComponent/BarChart/Bar.js';
import Donut from '../GraphsComponent/DonutChat/Donut.js';



class Toppanel extends React.Component {
    constructor() {
        super();
        this.state = {
            todayDate : ''

        }
    }
    componentWillMount() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1; 
        var year = d.getFullYear();
        var dateStr = date + "-" + month + "-" + year;
        this.setState({todayDate : dateStr})
    }
    render() {
        return (
            <div>
                
                <AppUpdated />
                <span className="Badge">Recent Feeds</span>
                <div className="toppanel card" >
                    <div className="card-body cardContent">
                        <ul>
                            <li className="toppanellist">
                                <span>{this.state.todayDate}</span>
                            </li>
                            <li className="toppanellist">
                                <div className="ToPalist2item">
                                    <span className="card-main-text">INDIA COVID-19 TRACKER</span>
                                    <div className="ToPchilditem">
                                        <span className="TopPholding">Holdings</span>
                                        <span className="TopPindus">industries</span>
                                    </div>
                                </div>
                            </li>
                            <li className="listStyle">
                                <div className="ToPalist3item">
                                    <ul className="listStyle">
                                        <li className="TP3list extl1">About to Expand</li>
                                        <li className="Topitem3Child extraClass tp1color"> + 567</li>
                                        <li className="Topitem4Child extraClass"> - 267</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="listStyle">
                                <div className="ToPalist4item">
                                    <ul className="listStyle">
                                        <li className="TP3list extl2">Expired</li>
                                        <li className="Topitem3Child tp2color"> + 567</li>
                                        <li className="Topitem4Child"> - 267</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="listStyle">
                                <div className="ToPalist5item">
                                    <ul className="listStyle">
                                        <li className="TP4list extl3">Missed</li>
                                        <li className="Topitem3Child tp3color"> + 567</li>
                                        <li className="Topitem4Child"> - 267</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="listStyle">
                                <div className="ToPalist6item">
                                    <ul className="listStyle">
                                        <li className="TP4list extl4">Missed</li>
                                        <li className="Topitem3Child tp4color"> + 567</li>
                                        <li className="Topitem4Child"> - 267</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="listStyle">
                                <div className="ToPalist7item">
                                    <button className="Toplastbtn" title="Download PDF">GET REPORT</button>
                                </div>
                            </li>
                            <li className="listStyle">
                            <div className="Graph">
                                <Bar />
                            </div>
                            </li>
                            <li className="listStyle">
                            <div className="DonutGraph">
                                <Donut />
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Toppanel;