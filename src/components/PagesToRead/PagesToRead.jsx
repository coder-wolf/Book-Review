import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBooksFromStorage } from '../../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const books = [
    {
        name: 'The grate gatsby',
        pages: 129,
    },
    {
        name: 'The grate gatsby',
        pages: 210,
    },
    {
        name: 'The grate gatsby',
        pages: 100,
    },
    {
        name: 'The grate gatsby',
        pages: 310,
    },
    {
        name: 'The grate gatsby',
        pages: 110,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const fetchedReadBooks = getReadBooksFromStorage();

        fetch('books.json')
            .then(res => res.json())
            .then(books => {
                const filteredReadBooks = books.filter(book => fetchedReadBooks.includes(parseInt(book.id)));
                setReadBooks(filteredReadBooks.slice(0, 5));
                console.log(filteredReadBooks)
            })
    }, []);

    return (
        <div className='bg-[#F8F8F8] p-20 rounded-xl'>
            <BarChart
                width={1100}
                height={450}
                data={readBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis />
                <Bar dataKey="number_of_pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;


