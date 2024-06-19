const conn=require('../config/database')

exports.uks = async (req, res) => {
    const query = `SELECT * FROM uk`;
   try{
    conn.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        results.forEach(casino => {
            casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
            casino.review = casino.review.split(',').map(item => item.trim());
        });
        return res.json(results);
    });
   }
    catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
exports.uss = async (req, res) => {
    const query = `SELECT * FROM us`;
   try{
    conn.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        results.forEach(casino => {
            casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
            casino.review = casino.review.split(',').map(item => item.trim());
        });
       return res.json(results);
    });
   }
    catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
exports.auss = async (req, res) => {
    const query = `SELECT * FROM aus`;
   try{
    conn.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        results.forEach(casino => {
            casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
            casino.review = casino.review.split(',').map(item => item.trim());
        });
       return res.json(results);
    });
   }
    catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
exports.frenchs = async (req, res) => {
    const query = `SELECT * FROM french`;
   try{
    conn.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        results.forEach(casino => {
            casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
            casino.review = casino.review.split(',').map(item => item.trim());
        });
       return res.json(results);
    });
   }catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
exports.nondeposit = async (req, res) => {
    const query = `SELECT * FROM nd`;
    try{
        conn.query(query, (error, results, fields) => {
            if (error) {
                console.error('Error executing MySQL query: ', error);
                res.status(500).json({ error: 'Failed to fetch data' });
                return;
            }
            results.forEach(casino => {
                casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
                casino.review = casino.review.split(',').map(item => item.trim());
            });
           return res.json(results);
        });
    }catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
exports.blogs = async (req, res) => {
    const query = `SELECT * FROM blog`;
  try{
    conn.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing MySQL query: ', error);
            res.status(500).json({ error: 'Failed to fetch data' });
            return;
        }
        results.forEach(casino => {
            casino.datalist = casino.datalist.split(',').map(item => item.trim());
            // casino.review = casino.review.split(',').map(item => item.trim());
        });
        return res.json(results);
    });
  }catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).json({ error: error });
}
}

// Define a route to fetch the data

// app.get('/casino/:id', (req, res) => {
//     const id = req.params.id;

        
//         connection.query('SELECT id, casinoname, countryname, price, playlink, casnioimage, casinodetail, review FROM uk WHERE id = ?', [id], (error, results, fields) => {
           

//             if (error) {
//                 res.status(500).json({ error: error });
//                 return;
//             }

//             if (results.length === 0) {
//                 res.status(404).json({ error: 'Casino not found' });
//                 return;
//             }

    
//             const casinodetailArray = results[0].casinodetail.split(',');

//             res.json({
//                 id: results[0].id,
//                 casinoname: results[0].casinoname,
//                 countryname: results[0].countryname,
//                 price: results[0].price,
//                 playlink: results[0].playlink,
//                 casinoimage: results[0].casinoimage,
//                 casinodetail: casinodetailArray,
//                 casinoreview: results[0].review
//             });
//         });
//     });

exports.getAllData = async (req, res) => {
    try {
        const uksData = await fetchData('uk');
        const ussData = await fetchData('us');
        const aussData = await fetchData('aus');
        const frenchsData = await fetchData('french');
        const nondepositData = await fetchData('nd');

        const allData = [...uksData,...aussData,...ussData,...frenchsData,...nondepositData]

       return res.json(allData);
    } catch (error) {
        console.error('Error fetching data: ', error);
        res.status(500).json({ error: error });
    }
}
async function fetchData(tableName) {
    const query = `SELECT * FROM ${tableName}`;
    try {
        const results = await new Promise((resolve, reject) => {
            conn.query(query, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                results.forEach(casino => {
                    casino.casinodetail = casino.casinodetail.split(',').map(item => item.trim());
                    casino.review = casino.review.split(',').map(item => item.trim());
                });
                resolve(results);
            });
        });

        // Extract required fields and return as a simple array of objects
        return results.map(casino => ({
            id: casino.id,
            casinoname: casino.casinoname,
            countryname: casino.countryname,
            price: casino.price,
            playlink: casino.playlink,
            casinoimage: casino.casinoimage,
            casinodetail: casino.casinodetail,
            review: casino.review,
            about: casino.about,
            likes: casino.likes
        }));
    } catch (error) {
        throw error;
    }
}
