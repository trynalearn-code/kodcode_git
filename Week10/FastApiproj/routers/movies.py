from fastapi import APIRouter,HTTPException
import data

router=APIRouter()


@router.get("")
def get_movies():
    return data.movies

@router.get("/search/genre")
def search_by_genre(genre):
    lst=[]
    for movie in data.movies:
        if movie["genre"]==genre:
            lst.append(movie)
    return lst

@router.get("/search/year")
def search_by_genre(year):
    lst=[]
    for movie in data.movies:
        if movie["year"]==year:
            lst.append(movie)
    return lst

@router.get("/count")
def search_by_genre(genre):
    return {len(data.movies)}

@router.get("/{movie_id}")
def get_movie_by_id(movie_id:int):
    for movie in data.movies:
        if movie["id"]==movie_id:
            return movie
    raise HTTPException(status_code=404, detail="Sorry, your movie doesn't exist")
        
@router.post("")
def add_movie(body:dict):
    for movie in data.movies:
        if movie["id"]==body["id"]:
            raise HTTPException(status_code=409,detail="sorry, that id is already in use")
    data.movies.append(body)

@router.delete("{movie_id}")
def remove_movie(movie_id:int):
    for movie in data.movies:
        if movie["id"]==movie_id:
            data.movies.remove(movie)
            return {"message": "your movie has been deleted"}
    raise HTTPException(status_code=404, detail="Sorry, your movie doesn't exist")

@router.put("/{movie_id}")
def update_name(movie_id:int, title:str):
    for movie in data.movies:
        if movie["id"]==movie_id:
            movie["title"]=title
            return {"message": "your movie has been updated successfully"}
    raise HTTPException(status_code=404, detail="Sorry, your movie doesn't exist")

@router.patch("/{movie_id}/availability")
def change_availability(movie_id:int):
    for movie in data.movies:
        if movie["id"]==movie_id:
            movie["availability"]=not(movie["availability"])

@router.delete("")
def delete_all_movies():
    data.movies=[]
    return data.movies
