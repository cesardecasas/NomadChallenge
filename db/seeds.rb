# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

coaches = Coach.create([{name:'Christy Schumm', description: 'very energetic job seeker coach. together well achieve the stars'}, 
{name:'Natalia Stanton Jr.',description:'Of course she is also perceptive, responsive and faithful, but they are tainted by and mixed with habits of being narrow-minded as well. Her objectivity though, this is what she`s pretty much known for. Oftentimes people will count on this and her cooperation whenever they need assistance or help.' },
{name:'Nola Murazik V', description:'His dutiful nature though, this is what he is pretty much loved for. On many occasions people will count on this and his sensitive nature especially when they need comforting or support.'},
{name:"Elyssa O'Kon", description:'Her planning though, this is what she is pretty much loved for. Friends frequently count on this and her humbleness whenever they need help.'},
{name:'Dr. Geovany Keebler', description:'Of course he is also dynamic, leaderly and balanced, but they are in shorter supply, especially considering they are mixed with being miserable as well. His sense of humor though, this is what he is pretty much known for.'}])

days = Day.create([{name:'Monday', coach: coaches.first },{name:'Monday', coach: coaches.third },{name:'Monday', coach: coaches.fourth },
{name:'Tuesday', coach: coaches.first }, {name:'Tuesday', coach: coaches.second }, {name:'Tuesday', coach: coaches.third }, {name:'Tuesday', coach: coaches.fourth },
{name:'Wednesday', coach: coaches.second }, {name:'Wednesday', coach: coaches.third }, {name:'Wednesday', coach: coaches.fourth },
{name:'Thursday', coach: coaches.first }, {name:'Thursday', coach: coaches.fifth },
{name:'Friday', coach: coaches.first }, {name:'Friday', coach: coaches.fourth },
{name:'Saturday', coach: coaches.second}, {name:'Saturday', coach: coaches.third}, {name:'Saturday', coach: coaches.fourth},
{name:'Sunday', coach: coaches.second}, {name:'Sunday', coach: coaches.third}, {name:'Sunday', coach: coaches.fourth}])

availabilities = Availability.create([{min:'9:00:00 AM', max:'5:30:00 PM', coach: coaches.first, day:days.first}])
