$(function () {
    'use strict'

    var words = ['Rnikrozoft', 'Jirawat', 'Charoonnet'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 150;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.aside-logo').text(part);
        }, speed);
    };

    wordflick();

    var ctxLabel = ['C#', 'PHP', 'Golang', 'C', 'HTML', 'Laravel', 'Codeigniter', 'MongoDB', 'Jquery', 'Bootstrap', 'Firebase', 'MySQL/Postgres', 'Docker', 'ExpressJS', 'Bulma css', 'Git', 'Wordpress','k8s'],
        ctxData1 = [25, 65, 45, 5, 90, 10, 55, 25, 45, 85, 5, 60, 25, 10, 50, 40, 95,10],
        size1 = ctxLabel.length,
        arr = [];

    function getRandomColorHex(size) {
        for (var j = 0; j < size; j++) {
            var hex = "0123456789ABCDEF",
                color = "#";
            for (var i = 1; i <= 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
                arr[j] = color;
            }
        }
        return arr;
    }

    var ctx1 = document.getElementById('skill-chart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ctxLabel,
            datasets: [{
                data: ctxData1,
                backgroundColor: getRandomColorHex(size1)
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false,
                labels: {
                    display: false
                }
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        color: '#e5e9f2'
                    },
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        fontColor: '#182b49',
                        max: 100
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: '#182b49'
                    }
                }]
            }
        }
    });

    $('.peity-donut').peity('donut');
    $.plot('#flotChart2', [{
        color: '#0168fa',
        curvedLines: {
            apply: true
        }
    }], {
        series: {
            shadowSize: 0,
            lines: {
                show: true,
                lineWidth: 1.5,
                fill: .05
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin: 0
        },
        yaxis: {
            show: false,
            max: 55
        },
        xaxis: {
            show: true,
            color: 'rgba(131,146,165,.08)',
            min: 48,
            max: 102,
            tickSize: 5
        }
    });
})