-- initialization_script.sql

-- Create the music_streaming database if it doesn't exist
CREATE DATABASE music_streaming;

-- Connect to the music_streaming database
\connect music_streaming;

-- Create tables only if they don't exist
CREATE TABLE IF NOT EXISTS public.files (
    processed_state character varying,
    file_url character varying,
    owner json[],
    file_type character varying,
    file_created_time bigint,
    file_size bigint
);

CREATE TABLE IF NOT EXISTS public.projects (
    time_created bigint,
    description text,
    picture_url character varying,
    project_id character varying NOT NULL,
    project_name character varying,
    project_contributors character varying,
    owner json[],
    project_json json
);

CREATE TABLE IF NOT EXISTS public.users (
    uuid character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    profile_picture character varying(255) DEFAULT './pictures/def.jpg'::character varying NOT NULL,
    email character varying(255) NOT NULL,
    description text NOT NULL,
    verified boolean,
    last_time_media_accessed bigint,
    last_logged_in bigint,
    date_joined bigint
);

-- Make sure to reset the search path
RESET search_path;

-- Completed initialization