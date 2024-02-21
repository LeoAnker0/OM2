CREATE TABLE public.files (
    file_url text PRIMARY KEY,
    processed_state text,
    owner json[],
    file_type text,
    last_time_accessed bigint,
    file_created_time bigint,
    file_size bigint
);

CREATE TABLE public.projects (
    project_id text PRIMARY KEY,
    time_created bigint,
    description text,
    picture_url text,
    project_name text,
    project_contributors text,
    owner json[]
);

CREATE TABLE public.songs (
    "URL" text PRIMARY KEY,
    "ProjectID" text,
    "SongName" text,
    "Duration" int,
    "SongSequence" int,
    "Favourited" boolean,
    "FolderSize" bigint,
    "Version" int
);

CREATE TABLE public.users (
    uuid text PRIMARY KEY,
    username text,
    password text,
    profile_picture text,
    email text,
    description text,
    verified boolean,
    last_logged_in bigint,
    date_joined bigint,
    last_state text,
    admin boolean DEFAULT false,
    storage_allowance bigint
);