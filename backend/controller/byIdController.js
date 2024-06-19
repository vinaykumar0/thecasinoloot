const conn = require('../config/database')

exports.ukById = async (req, res) => {
    
    const id = req.params.id;

        
        conn.query('SELECT id, casinoname, countryname, price, playlink, casinoimage, casinodetail, review, about, likes FROM uk WHERE id = ?', [id], (error, results, fields) => {
           

            if (error) {
                res.status(500).json({ error: error });
                return;
            }

            if (results.length === 0) {
                res.status(404).json({ error: 'Casino not found' });
                return;
            }

    
            const casinodetailArray = results[0].casinodetail.split(',');
            const reviewArray = results[0].review.split(',');

            res.json({
                id: results[0].id,
                casinoname: results[0].casinoname,
                countryname: results[0].countryname,
                about: results[0].about,
                price: results[0].price,
                playlink: results[0].playlink,
                casinoimage: results[0].casinoimage,
                casinodetail: casinodetailArray,
                review: reviewArray,
                likes:results[0].likes
            });
        });
}
exports.usById = async (req, res) => {

    const id = req.params.id;


    conn.query('SELECT id, casinoname, countryname, price, playlink, casinoimage, casinodetail, review, about, likes FROM us WHERE id = ?', [id], (error, results, fields) => {


        if (error) {
            res.status(500).json({ error: error });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Casino not found' });
            return;
        }


        const casinodetailArray = results[0].casinodetail.split(',');
        const reviewArray = results[0].review.split(',');

        res.json({
            id: results[0].id,
            casinoname: results[0].casinoname,
            countryname: results[0].countryname,
            about: results[0].about,
            price: results[0].price,
            playlink: results[0].playlink,
            casinoimage: results[0].casinoimage,
            casinodetail: casinodetailArray,
            review: reviewArray,
            likes: results[0].likes
        });
    });
}
exports.ausById = async (req, res) => {

    const id = req.params.id;


    conn.query('SELECT id, casinoname, countryname, price, playlink, casinoimage, casinodetail, review, about, likes FROM aus WHERE id = ?', [id], (error, results, fields) => {


        if (error) {
            res.status(500).json({ error: error });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Casino not found' });
            return;
        }


        const casinodetailArray = results[0].casinodetail.split(',');
        const reviewArray = results[0].review.split(',');

        res.json({
            id: results[0].id,
            casinoname: results[0].casinoname,
            countryname: results[0].countryname,
            about: results[0].about,
            price: results[0].price,
            playlink: results[0].playlink,
            casinoimage: results[0].casinoimage,
            casinodetail: casinodetailArray,
            review: reviewArray,
            likes: results[0].likes
        });
    });
}
exports.frenchById = async (req, res) => {

    const id = req.params.id;


    conn.query('SELECT id, casinoname, countryname, price, playlink, casinoimage, casinodetail, review, about, likes FROM french WHERE id = ?', [id], (error, results, fields) => {


        if (error) {
            res.status(500).json({ error: error });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Casino not found' });
            return;
        }


        const casinodetailArray = results[0].casinodetail.split(',');
        const reviewArray = results[0].review.split(',');

        res.json({
            id: results[0].id,
            casinoname: results[0].casinoname,
            countryname: results[0].countryname,
            about: results[0].about,
            price: results[0].price,
            playlink: results[0].playlink,
            casinoimage: results[0].casinoimage,
            casinodetail: casinodetailArray,
            review: reviewArray,
            likes: results[0].likes
        });
    });
}
exports.ndById = async (req, res) => {

    const id = req.params.id;


    conn.query('SELECT id, casinoname, countryname, price, playlink, casinoimage, casinodetail, review, about, likes FROM nd WHERE id = ?', [id], (error, results, fields) => {


        if (error) {
            res.status(500).json({ error: error });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Casino not found' });
            return;
        }


        const casinodetailArray = results[0].casinodetail.split(',');
        const reviewArray = results[0].review.split(',');

        res.json({
            id: results[0].id,
            casinoname: results[0].casinoname,
            countryname: results[0].countryname,
            about: results[0].about,
            price: results[0].price,
            playlink: results[0].playlink,
            casinoimage: results[0].casinoimage,
            casinodetail: casinodetailArray,
            review: reviewArray,
            likes: results[0].likes
        });
    });
}
exports.blogById = async (req, res) => {

    const id = req.params.id;


    conn.query('SELECT id, heading, subhead, desc_one, datalist, image_one, image_two, desc_two, author, date FROM blog WHERE id = ?', [id], (error, results, fields) => {


        if (error) {
            res.status(500).json({ error: error });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Casino not found' });
            return;
        }


        const datalistArray = results[0].datalist.split(',');
      

        res.json({
            id: results[0].id,
            heading: results[0].heading,
            subhead: results[0].subhead,
            desc_one: results[0].desc_one,
            datalist: datalistArray,
            image_one: results[0].image_one,
            image_two: results[0].image_two,
            desc_two: results[0].desc_two,
            author: results[0].author,
            date: results[0].date
        });
    });
}
