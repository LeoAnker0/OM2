import os

def find_file_paths(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            print(file_path)

# Provide the path to your "assets" folder
directory = "assets/"

find_file_paths(directory)
