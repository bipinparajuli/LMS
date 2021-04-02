import React from 'react'
import {Line} from 'react-chartjs-2'

function Chart() {
    const data = {
        labels: ['New Book Last Day', 'Book Issued', 'New Member', 'Not Returened'],
        datasets: [
          {
            label: 'Book Issued in month',
            data: [1, 19, 3, 5, ],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }
      

    return (
        <div>
            <Line 
 data={data}
 width={100}
 height={200}
 options={{options, maintainAspectRatio: false }}
            />
        </div>
    )
}

export default Chart
