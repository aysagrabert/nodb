const countries = [
    {
        info: 'Highlands',
        name: 'Scotland',
        image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/01/05/12/eilean-donan-castle-unsplash.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5'
    },
    {
        info: 'Mythology',
        name: 'Greece',
        image: 'https://live.staticflickr.com/8017/28434638262_cc67d1ef39_b.jpg'
    },
    {
        info: 'Animals',
        name: 'Africa',
        image: 'https://www.prlog.org/10431116-travelling-south-africa.jpg'
    }
]

module.exports = {
    //get
    allCountries(req, res) {
        res.status(200).send(countries);
    },

    //post
    addCountries(req, res) {
        const { info, name, image } = req.body;
        countries.push({info, name, image});
        res.status(200).send(countries);
    },

    //delete
    deleteCountries(req, res) {
        const {index} = req.params;
        countries.splice(index, 1);
        res.status(200).send(countries);
    },

    //put
    editCountries(req, res) {
        const {index, newCountries} = req.body;
        countries[index].info = newCountries
        res.status(200).send(countries);
    }
};