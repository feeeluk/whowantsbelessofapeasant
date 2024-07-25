drop table if exists quizzes cascade;
drop table if exists questions cascade;
drop table if exists categories cascade;
drop table if exists statuses cascade;
drop table if exists user_quizzes cascade;
drop table if exists users cascade;

create table if not exists
  users (
    user_id serial primary key,
    user_name varchar(50),
    user_clerk_id varchar(200),
    user_bio text,
    user_favourite_subject varchar(200)
  );

insert into
  users (user_name)
values
  (
    'Hannah'
  ),
  (
    'William'
  ),
  (
    'Phil'
  ),
  (
    'Sam'
  );


create table if not exists
  categories (
    category_id serial primary key,
    category_name varchar(50)
  );

insert into
  categories (category_name)
values
  (
    'Music'
  ),
  (
    'Games'
  ),
  (
    'Films'
  ),
  (
    'Trivia'
  );

create table if not exists
  statuses (
    status_id serial primary key,
    status_name varchar(50)
  );

insert into
  statuses (status_name)
values
  (
    'Active'
  ),
  (
    'Completed'
  ),
  (
    'Quit'
  ),
  (
    'Terminated'
  );


create table if not exists
  quizzes (
    quiz_id serial primary key,
    quiz_name varchar(50) not null,
    quiz_category_id integer not null,
    foreign key (quiz_category_id) references categories (category_id)
  );

insert into
  quizzes (quiz_name, quiz_category_id)
values
  (
    'Quiz 1', 1 
  ),
  (
    'Quiz 2', 2
  ),
  (
    'Quiz 3', 3
  ),
  (
    'Quiz 4', 4
  );

  create table if not exists
    questions (
      questions_id serial primary key,
      questions_number varchar(2) not null,
      questions_question text  not null,
      questions_answer_1 varchar(200)  not null,
      questions_answer_2 varchar(200)  not null,
      questions_answer_3 varchar(200)  not null,
      questions_answer_4 varchar(200)  not null,
      questions_final_answer varchar(250) not null,
      questions_quiz_id integer not null,
      questions_value integer not null,
      foreign key (questions_quiz_id) references quizzes (quiz_id)
    );

    insert into
      questions (questions_number, questions_value, questions_question, questions_answer_1, questions_answer_2, questions_answer_3, questions_answer_4, questions_final_answer, questions_quiz_id)
    values 
    ('15', 15, 'The word "Batrachian" describes which animals?','Monkeys and apes','Rats and mice','Frogs and toads','Hares and rabbits', 'Frogs and toads', 4),
    ('14', 14, 'Who was the first-ever winner of the Booker Prize for Fiction?','A S Byatt','V S Naipaul','P H Newby','J M Coetzee', 'P H Newby', 4),
    ('13', 13, 'In India who would live in a "Zenana"?','Women','Hermits','Soldiers','Servants', 'Women', 4),
    ('12', 12, 'Leman is the old word for which of these?','Fruit','Sweetheart','Dance','Poem', 'Fruit', 4),
    ('11', 11, 'Graham Sutherland"s portrait of whom was deliberately destroyed by the subject"s widow?','George VI','Winston Churchill','Dylan Thomas','Edward Elgar', 'Winston Churchill', 4),
    ('10', 10, 'Aquae Sulis was the Latin name for which English city?','Chester','Oxford','Colchester','Bath', 'Bath', 4),
    ('9', 9, 'Which of these was a court set up in the 15th century for cases affecting the interests of the crown?','Moon Chamber','Star Chamber','Heavenly Chamber','Sky Chamber', 'Star Chamber', 4),
    ('8', 8, 'What kind of ladies bag has a drawstring at the top?','Daisy bag','Delia bag','Dorothy bag','Dolores bag', 'Dorothy bag', 4),
    ('7', 7, 'On which continent is the Limpopo River?','South America','Asia','Africa','Europe', 'Africa', 4), 
    ('6', 6, 'The German Opel family was best known for the manufacure of what?','Clocks','Clothing','Cars','Carpets', 'Cars', 4), 
    ('5', 5, 'What type of creature is a guillemot?','Lizard','Bird','Whale','Beetle', 'Bird', 4),
    ('4', 4, 'Which of these is a traditional Asian sailing vessel?','Garbage','Junk','Trash','Scrap', 'Junk', 4), 
    ('3', 3, 'Chequers is the country resident of which public figure?','US President','British Prime Minister','Russian President','Bill Gates', 'British Prime Minister', 4),
    ('2', 2, 'Which of these is another term for sunglasses?','Dyes','Colours','Tints','Shades', 'Shades', 4), 
    ('1', 1, 'Which of these is the name for a male horse?','Silverback','Stallion','Billy','Mallard', 'Stallion', 4),


    ('15', 15, 'How many hours are needed to create one frame of the CGI animation in "Transformers"?','2','15','38','56', '38',3),
    ('14', 14, '"Enter the World" was the tagline for which movie?','Star Wars: The Phantom Menace','Harry Potter and the Prisoner of Azkaban','Avatar','Alice in Wonderland', 'Avatar',3),
    ('13', 13, 'Who wrote the story for "Jurassic Park"?','Carl Sagan','Dan Brown','Michael Crichton','John Grishamm', 'Michael Crichton',3),
    ('12', 12, 'Who was the music director of the blockbuster "Titanic"?','Harold Oswald','James Horner','AR Rehman','Celine Dion', 'Harold Oswald',3),
    ('11', 11, 'Who did Steven Spielberg originally want for the role of Dr. Alan Grant in Jurassic Park?','Kevin Costner','Harrison Ford','Tom Hanks','Kurt Russell', 'Harrison Ford',3),
    ('10', 10, 'Which actor — in one of their first roles — played a young Wendy Darling in Hook?','Gwyneth Paltrow','Cameron Diaz','Jennifer Garner','Keira Knightley', 'Gwyneth Paltrow',3),
    ('9', 9, 'What movie, at the time of its opening, was greatest yet for a Sylvester Stallone film?','Rocky II','Cop Land','Rocky IV','The Expendables', 'The Expendables',3),
    ('8', 8, 'Who directed the first three "Pirates of the Caribbean" movies?','Rod Marshall','Gore Verbinski','Ted Elliot','Garry Marshall', 'Gore Verbinski',3), 
    ('7', 7, 'For which of these movies did Leonardo DiCaprio win an Oscar for Best Actor?','The Revenant','The Last King of Scotland','Titanic','Blood Diamond', 'The Revenant',3), 
    ('6', 6, 'Which of these lines DID NOT come from "Monty Python and the Holy Grail"?','"You killed my father. Prepare to die"','"Bring out yer dead!"','"It is just a flesh wound!"','"We want a... a shrubbery!"', '"You killed my father. Prepare to die"',3), 
    ('5', 5, 'In the movie Frozen, who is Olaf?','A Snowman','A ghost','A knight','A reindee', 'A Snowman',3),
    ('4', 4, 'What term is used to describe the the western films directed by Italian director Sergio Leone?','Neapolitan Westerns','Mafia western','Tuscan western','Spaghetti western', 'Spaghetti western',3),
    ('3', 3, 'Which of these movies is NOT directed by M. Night Shyamalan?','The Ring','The Sixth Sense','Glass','Signs','The Ring', 3), 
    ('2', 2, 'What is it called when an actor breaks character to directly address the audience?','Sweeping the rug','Following the loose thread','Breaking the 4th wall','Breaking the narrative', 'Breaking the 4th wall',3), 
    ('1', 1, 'What was the first movie in the Marvel Cinematic Universe?','Iron Man','Thor','Captain America','Guardians of the Galaxy', 'Iron Man', 3),


    ('15', 15, 'When is it traditionally appropriate to slap the deck in Egyptian Ratscrew?','When the Ace is put down','When two Clubs are put down','When a pair is put down','When six and eight are put down', 'When a pair is put down', 2),
    ('14', 14, 'The Nintendo DS Lite is available in 6 languages. What language is it NOT available in?','Japanese','Spanish ','Indian','German', 'Indian', 2), 
    ('13', 13, 'The Adventure Island 1 game in NES uses what as energy?','Water','Fire','Trees','Fruit', 'Fruit', 2),
    ('12', 12, 'In what year did Sony announce they were developing the Playstation Portable?','2003','2004','2005','2006', '2003', 2),
    ('11', 11, 'In the PC game "Max Payne 2: The Fall of Max Payne", who plays the role of heroine?','Ana Payne','Greta Grabbo','Mona Sax','Lois Lane', 'Mona Sax', 2), 
    ('10', 10, 'What first person shooter is set on a space station where scientists have opened a portal to Hell?','Quake','Wolfenstein 3D','Doom','Halo', 'Doom', 2),
    ('9', 9, 'What species is Sonic the HedgeHog"s friend Knuckles?','Robot','Two-Tailed fox','Pangolin','Echidna', 'Echidna', 2),
    ('8', 8, 'Who is the main character of GTA: San Andreas?','Michael De Santa','Carl "CJ" Johnson','Tommy Vervetti','Niko Bellic', 'Carl "CJ" Johnson', 2),
    ('7', 7, 'What is the best-selling video game console of all time?','Nintendo DS','Nintendo Wii','Microsoft Xbox 360','Sony Playstation 2', 'Sony Playstation 2', 2),
    ('6', 6, 'Who is the creator of the Civilization series?','Shigeru Miyamoto','Sean Murray','Tim Schafer','Sid Meier', 'Sid Meier', 2),
    ('5', 5, 'Which company released the Intellivision console?','Magnavox','Mattel','Atari','Sega', 'Mattel', 2), 
    ('4', 4, 'What is the best selling video game of all time?','Grand Theft Auto V','Super Mario Bros','Tetris','Minecraft', 'Tetris', 2), 
    ('3', 3, 'Which of these characters is NOT in the first Mortal Kombat game?','Liu Kang','Kung Lao','Scorpion','Sonya Blade', 'Kung Lao', 2), 
    ('2', 2, 'The first appearance of Mario was in which game?','Tennis','Donkey Kong',' Super Mario Bros','Punch Out!', 'Donkey Kong', 2),
    ('1', 1, 'Which of these games is the oldest?','Pong','Asteroids','Galaxian','Joust', 'Pong', 2),


    ('15', 15, 'How many drummers did Nirvana have before Dave Grohl joined?','1','2','4','0', '4', 1),
    ('14', 14, 'What was the first ever #1 video on MTV"s Total Request Live?','I"ll Never Break Your Heart by the Backstreet Boys','Tearin Up My Heart by N*Sync','All I Have To Give by Backstreet Boys','(God Must Have Spent) A Little More Time On You by N*Sync', 'I"ll Never Break Your Heart by the Backstreet Boys', 1),
    ('13', 13, 'Who was the first musician to host Saturday Night Live?','Ray Charles','Kris Kristofferson','Art Garfunkel','Paul Simon', 'Paul Simon', 1),
    ('12', 12, 'Paul McCartney originally wrote "Helter Skelter" in order to out-rock which band?','The Rolling Stones','The Doors','The Who','The Kinks', 'The Who', 1),
    ('11', 11,'Katy Perry does not use her actual surname in order to avoid confusion with what other celebrity?','Kate Upton','Kate Hudson','Kate Walsh','Kate Moss', 'Kate Hudson', 1), 
    ('10', 10, 'Before his music career, Drake starred in what TV show?','Degrassi: The Next Generation','Radio Free Roscoe','Edgemont','Falcon Beach','Degrassi: The Next Generation',1),
    ('9', 9, 'What pop star based their stage name off a song by Queen?', 'Stefani Joanne Angelina Germanotta','Ella Marija Lani Ylelich-O"Connor','Amethyst Amelia Kelly','Elizabeth Woolridge Grant', 'Stefani Joanne Angelina Germanotta', 1),
    ('8', 8, 'Who was the winner of The Voice UK in 2017?', 'Into The Arc', 'Jamie Miller', 'Mo Adeniran', 'Michelle John', 'Mo Adeniran', 1 ),
    ('7', 7, 'In what year did Bucks Fizz win the Eurovision Song Contest?', '1978', '1979', '1980', '1981', '1981', 1),
    ('6', 6, 'What is the name of the record company founded by Frank Sinatra in 1960?', 'Reprise Records', 'Capitol Records', 'EMI', 'Warner Music Group', 'Reprise Records', 1), 
    ('5', 5, 'What was the name of Girls Aloud"s first single?', 'I"ll stand by you', 'Walk this way', 'Sound of the underground', 'The Promise', 'Sound of the underground', 1),
    ('4', 4, 'In what year did Elvis Presley die?', '1975', '1976', '1977', '1978', '1977', 1),
    ('3', 3, 'Which female singer fronted "The Pretenders"?', 'Chrissie Hynde', 'Courtney Love', 'Joan Jett', 'Stevie Nicks', 'Chrissie Hynde', 1),   
    ('2', 2, 'Which Glam rock band was fronted by Marc Bolan?', ' Slade', 'Kiss', 'Sweet', 'T Rex', 'T Rex', 1),
    ('1', 1, 'Which band had a hit with Barbie Girl?', 'Vengaboys', 'Rednex ', '2 Unlimited', 'Aqua', 'Aqua', 1);

create table if not exists
  user_quizzes (
    user_quiz_id serial primary key,
    user_quiz_user_id integer not null,
    user_quiz_quiz_id integer not null,
    user_quiz_status_id integer not null,
    user_quiz_score integer not null,
    user_quiz_progress integer not null,
    foreign key (user_quiz_user_id) references users (user_id),
    foreign key (user_quiz_quiz_id) references quizzes (quiz_id),
    foreign key (user_quiz_status_id) references statuses (status_id)
  );

insert into
  user_quizzes (user_quiz_user_id, user_quiz_quiz_id, user_quiz_status_id, user_quiz_score, user_quiz_progress)
values
  (
    1, 1, 1, 6, 3
  ),
  (
    2, 1, 1, 3, 2
  ),
    (
    3, 1, 1, 10, 4
  ),
  (
    3, 1, 2, 15, 5
  ),
  (
    4, 1, 1, 21, 6
  );