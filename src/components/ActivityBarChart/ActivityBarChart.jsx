import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 52%;
  background-color: #FBFBFB;
  border-radius: 8px;
  display: flex;
  align-items: end;
`

const ActivityBarChart = (props) => {
  const { activity } = props;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{backgroundColor: '#E60000', color: 'white', fontSize: '12px', fontWeight: 400}}>
          <p style={{textAlign: 'center', padding: '20px 10px 15px 10px', lineHeight: 0}}>{`${payload[0].value}kg`}</p>
          <p style={{textAlign: 'center', padding: '15px 10px 20px 10px', lineHeight: 0}}>{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%" style={{borderRadius: '8px'}}>                              
      <BarChart width="100%" height="100%" data={activity} margin={{top: 20}} barSize={8}>
        <text
          x='3%'
          y='8%'
          style={{fontSize: '14px', fontWeight: 500, color: '#20253A'}}
        >
          Activité quotidienne
        </text>
        <CartesianGrid vertical={false} strokeDasharray="2" opacity={0.6}/>
        <XAxis dy={5} dataKey="day" tickLine={false} axisLine={{ stroke: '#9B9EAC', fontWeight: 500}} tick={{ fill: '#9B9EAC'}} opacity={0.7}/>
        <YAxis yAxisId="Poids (kg)" tickLine={false} axisLine={false} orientation="right" tick={{ fill: '#9B9EAC', fontWeight: 500}} opacity={0.7} domain={['dataMin - 1', 'dataMax + 3']} interval={0}/>
        <YAxis hide yAxisId="Calories brûlées (kCal)" tickLine={false} axisLine={false} orientation="right" tick={false}/>
        <Tooltip cursor={{fill: '#C4C4C4'}} content={<CustomTooltip/>} />
        <Legend iconType="circle" iconSize={8} verticalAlign="top" align="right" wrapperStyle={{top: 0}} formatter={(value) => <span style={{ color: '#9B9EAC', fontSize: '13px', fontWeight: 500, marginRight: '25px' }}>{value}</span>}/>
        <Bar yAxisId="Poids (kg)" dataKey="Poids (kg)" fill="#282D30"  radius={[20,20,0,0]}/>
        <Bar yAxisId="Calories brûlées (kCal)" dataKey="Calories brûlées (kCal)" fill="#E60000" radius={[20,20,0,0]}/>   
      </BarChart>
  </ResponsiveContainer>
  </Container>
  )
  
}

export default ActivityBarChart