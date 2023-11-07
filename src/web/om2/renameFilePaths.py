import os

def find_file_paths(directory):
    file_paths = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            file_paths.append(file_path)
    return file_paths

def replace_spaces_with_underscore(file_paths):
    modified_paths = []
    for path in file_paths:
        directory, filename = os.path.split(path)
        modified_filename = filename.replace(" ", "_")
        modified_path = os.path.join(directory, modified_filename)
        modified_paths.append((path, modified_path))
    return modified_paths

def rename_files(modified_paths):
    for old_path, new_path in modified_paths:
        os.rename(old_path, new_path)

# Provide the path to your "assets" folder
directory = "assets/"

file_paths = find_file_paths(directory)
modified_paths = replace_spaces_with_underscore(file_paths)

rename_files(modified_paths)

print("File names have been updated.")
