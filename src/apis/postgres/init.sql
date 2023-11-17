CREATE TABLE public.files (
    processed_state text,
    file_url text,
    owner json[],
    file_type text,
    file_created_time bigint,
    file_size bigint
);

CREATE TABLE public.projects (
    time_created bigint,
    description text,
    picture_url text,
    project_id text NOT NULL,
    project_name text,
    project_contributors text,
    owner json[]
);


CREATE TABLE public.songs (
    "URL" text,
    "ProjectID" text,
    "SongName" text,
    "Duration" smallint,
    "SongSequence" smallint,
    "Favourited" boolean,
    "FolderSize" bigint,
    "Version" smallint
);

CREATE TABLE public.users (
    uuid text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    profile_picture text NOT NULL,
    email text NOT NULL,
    description text NOT NULL,
    verified boolean,
    last_logged_in bigint,
    date_joined bigint,
    last_state text,
    admin boolean DEFAULT false,
    storage_allowance bigint
);