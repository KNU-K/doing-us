const { login, join, logout } = require("../controllers/auth.controller");
const {
  findRoomOfUserByUserId,
  findDetailOfRoomOfUserByUserIdAndRoomId,
  createRoomByUserId,
  joinRoomByUserIdAndRoomId,
  deleteRoomByUserIdAndRoomId,
  updateOrExitRoomByUserIdAndRoomId,
  findRoom,
} = require("../controllers/room.controller");
const {
  findUser,
  findUserByUserId,
  findUserByRoomId,
} = require("../controllers/user.controller");

const router = require("express").Router();

/**@auth_sector */ //fin!!
router.post("/auth/join", join);
router.post("/auth/login", login);
router.get("/auth/logout", logout);

/**@user_sector */
router.get("/user", findUser);
router.get("/user/:userId", findUserByUserId);

/**@user_room_sector */
router.get("/user/:userId/room", findRoomOfUserByUserId); //TODO: OWNER�̰ų� �Ҽ��̰ų�
router.get(
  "/user/:userId/room/:roomId",
  findDetailOfRoomOfUserByUserIdAndRoomId
);
router.post("/user/:userId/room", createRoomByUserId);
router.post("/user/userId/room/:roomId", joinRoomByUserIdAndRoomId);
router.delete("/user/:userId/room/:roomId", deleteRoomByUserIdAndRoomId); //owner = ���ı�
router.put("/user/:userId/room/:roomId", updateOrExitRoomByUserIdAndRoomId); //TODO: owner�� ���� ����, TODO: user = ������,

/**@only_room_sector */

router.get("/room", findRoom);

module.exports = router;
