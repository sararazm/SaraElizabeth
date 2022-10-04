
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          required:
 *             - name
 *             - lastName
 *          properties:
 *            id:
 *              type: string
 *              description: The auto-generated id of the user
 *            name:
 *              type: string
 *              description: The name of the user
 *            lastName:
 *              type: string
 *              description: The last name of the user
 *          example:
 *              id: 60a9b0f5b9b5f8a0b4e5b5a1
 *              name: John
 *              lastName: Doe
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Get the user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    responses:
 *      200:
 *        description: The user description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *
 */

/**
 * @swagger
 * /api/users/post:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/users/update/{id}:
 *  put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/users/delete/{id}:
 *  delete:
 *    summary: Remove the user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    responses:
 *      200:
 *        description: The user was deleted
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /api/users/delete:
 *  delete:
 *    summary: Remove all users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: All users were deleted
 *      500:
 *        description: Some server error
 */
