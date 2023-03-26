# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Opinion.destroy_all
Match.destroy_all
User.destroy_all

user1 = User.create(username: 'Rob_blue', password: 'goblue',  age: 33, location: 'Brooklyn',favorite_club: 'Manchester City')
user2 = User.create(username: 'Red4ever', password: 'goreds', age: 23, location: 'St Louis',favorite_club: 'Liverpool')
user3 = User.create(username: 'Oldtimer', password: 'hoping',  age: 55, location: 'Memphis',favorite_club: 'Everton')
user4 = User.create(username: 'Olga', password: 'letsgo',  age: 22, location: 'Chicago',favorite_club: 'Chelsea')
user5 = User.create(username: 'Not_jessiemarsh', password: 'goleeds',  age: 43, location: 'Los Angeles',favorite_club: 'Leeds United')

match1 = Match.create(user_id: user1.id, game: 1, home_team: "Chelsea", away_team: "Bournemouth", home_score: 2, away_score: 0,
         hometeam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/04/chelsea-fc_2006-pres.png", 
         awayteam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/05/afc_bournemouth_2013-pres.png")
match2 = Match.create(user_id: user2.id, game: 2, home_team: "Manchester United", away_team: "Nottingham", home_score: 3, away_score: 0,
         hometeam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/04/manchester_united_fc_1998-pres.png" ,
         awayteam_img_url: "https://sportslogohistory.com/wp-content/uploads/2022/08/nottingham_forest_fc_2010-pres.png" )
match3 = Match.create(user_id: user3.id, game: 3, home_team: "Leeds United", away_team: "Manchester City", home_score: 1, away_score: 3,
         hometeam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/11/leeds_united_FC._2002-pres.png" ,
         awayteam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/04/manchester_city_fc_2016-pres.png")
match4 = Match.create(user_id: user5.id, game: 4, home_team: "West Ham", away_team: "Brentford", home_score: 0, away_score: 2,
          hometeam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/05/west_ham_united-fc_2016-pres.png" ,
          awayteam_img_url: "https://sportslogohistory.com/wp-content/uploads/2021/12/brentford_fc_2017-pres.png")
match5 = Match.create(user_id: user4.id, game: 5, home_team: "Liverpool", away_team: "Leicester", home_score: 2, away_score: 1,
         hometeam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/04/liverpool_fc_1999-pres.png",
         awayteam_img_url: "https://sportslogohistory.com/wp-content/uploads/2020/04/leicester_city_fc_2010-pres.png")

opinion1 = Opinion.create(user_id: user1.id, match_id: match3.id, comment: "awesome game!!! starting the season strong!")
opinion2 = Opinion.create(user_id: user5.id, match_id: match3.id, comment: "the ref was born in Manchester,he was clearly bias :( ")
opinion3 = Opinion.create(user_id: user2.id, match_id: match5.id, comment: "great game !! we will win the league this year!!")
opinion4 = Opinion.create(user_id: user3.id, match_id: match3.id, comment: "the second goal is best goal of the season so far, i must admit")
opinion5 = Opinion.create(user_id: user4.id, match_id: match1.id, comment: "it should've been 3 nil , the third goal was no offside !!")
opinion6 = Opinion.create(user_id: user2.id, match_id: match2.id, comment: "come on Nottingham!! you only had 1 job !")
opinion7 = Opinion.create(user_id: user1.id, match_id: match2.id, comment: "i know right ! Nottingham didnt even play hard at all ")
opinion8 = Opinion.create(user_id: user5.id, match_id: match4.id, comment: "West Ham will be relegated this season, you heard this here first")
opinion9 = Opinion.create(user_id: user4.id, match_id: match4.id, comment: "calm down , it's only one game")
opinion10 = Opinion.create(user_id: user3.id, match_id: match4.id, comment: "i wish my club played like Brentford, what a game !!")
opinion11 = Opinion.create(user_id: user1.id, match_id: match4.id, comment: "for a newly promoted club , they are impressive")
