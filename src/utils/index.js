const { Movie } = require("../movie/movie.model")

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const saveMovie = await movie.save();
        console.log(saveMovie);
    } catch (error) {
        console.log(error)
        
    }
};

exports.list = async() =>{
   try {
    const list = await Movie.find();
    console.log(list);
 } catch (error) {
    console.log(error);
 }

};

exports.update = async(filter, update) =>{
    try{
     const watchedUpdate = await Movie.findOneAndUpdate(filter, update, { new: true });
     console.log(watchedUpdate);

    }catch(error){
        console.log(error);
    }
}

exports.remove = async (search, cancel) => {
    try {
        const deleteMovie = await Movie.findOneAndDelete(search, cancel);
        console.log(deleteMovie);
        } catch (error) {
        
    }
};

