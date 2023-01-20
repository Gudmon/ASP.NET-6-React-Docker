import { useState, useEffect} from 'react';


export default function App () {
    const [products, setProducts] = useState([]);
    const [loading, updateLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        fetch('/api/Customer')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (!isCancelled) {
                console.log(data)
                setProducts(data);
            }
        });
        return () => {
        updateLoading(false)
        isCancelled = true;
        };

    }, []);

    return (  
        loading 
        ? (
            <p>Loading... Please refresh once the ASP.NET backend has started. See 
                <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> 
                for more details.
            </p>
          ) 
        :
          (    
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
          )
    )
}

// async function apiGet(url) {
//    let response = await fetch(url, {
//        method: 'GET',     
//    });
//    console.log(response)
//    if (!response.ok) {
//        throw new Error(`Something went wrong during fetching data from ${url}`)
//    } 
//    else {
//        return await response.json()
//    }
// }