DROP TABLE IF EXISTS Admin;

DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Events;

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    authorized BOOLEAN DEFAULT false,
    name VARCHAR(255) NOT NULL,
    idea_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    refresh_token TEXT NOT NULL DEFAULT '',
    authToken TEXT NOT NULL DEFAULT '',
    resetPasswordToken VARCHAR(255) DEFAULT NULL,
    resetPasswordExpires DATE DEFAULT NULL,
    diagnosis VARCHAR(255) DEFAULT NULL,
    completed_challenges INTEGER NOT NULL,
    completed_steps INTEGER NOT NULL,
    completed_phases INTEGER NOT NULL,
    completed_achievements INTEGER DEFAULT NULL,
    pitch_form_1 TEXT NOT NULL DEFAULT '',
    pitch_form_2 TEXT NOT NULL DEFAULT '',
    pitch_form_3 TEXT NOT NULL DEFAULT '',
    pitch_form_4 TEXT NOT NULL DEFAULT '',
    propriedade_form_1 TEXT NOT NULL DEFAULT '',
    propriedade_form_2 TEXT NOT NULL DEFAULT '',
    propriedade_form_3 TEXT NOT NULL DEFAULT '',
    propriedade_form_4 TEXT NOT NULL DEFAULT '',
);

CREATE TABLE Admin (
    user_id INTEGER PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Events (
    event_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    type VARCHAR(255) NOT NULL,
    FOREIGN KEY (email) REFERENCES Users (email) ON UPDATE CASCADE ON DELETE CASCADE
);