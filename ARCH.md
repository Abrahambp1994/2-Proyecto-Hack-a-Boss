ARQUITECTURA 2-PROYECTO-HACK-A-BOSS: INSTAGRAM

ENDPOINTS PÚBLICOS

> getUserGallery (app.get("/users/:id")) // CONTROLLERS
    > userIdSchema // SCHEMAS
    > selectUserById // REPOSITORIES
    > selectPostsFromUser // REPOSITORIES

> loginUser (app.post("/login")) // CONTROLLERS
    > loginUserSchema // SCHEMAS
    > selectUserByEmail // REPOSITORIES

> createUser (app.post("/users")) // CONTROLLERS
    > createUserSchema // SCHEMA
    > selectUserByEmail // REPOSITORIES
    > insertUser // REPOSITORIES