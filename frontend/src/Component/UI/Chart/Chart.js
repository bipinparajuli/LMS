import React from 'react'
import {Line} from 'react-chartjs-2'
import { useStateValue } from '../../../Container/Serviceprovider'



const  Chart =  () =>  {

  const [{totalBook,totalUser,totalOrder},dispatch] = useStateValue()

  const data =  {
        labels: ['Books', 'Users', 'Order'],
        datasets: [
          {
            label: 'Book Issued in month',
            data: [totalBook,totalUser,  totalOrder],
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
 height={400}
 options={{options,maintainAspectRatio:false }}
            />
        </div>
    )
}

export default Chart
