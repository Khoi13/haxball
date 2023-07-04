import HaxballJS from 'haxball.js';
import { RSMapRaw } from './map.js';

(async function () {
    const HBInit: any = await HaxballJS;

    console.log(HaxballJS);
    console.log(HBInit);
    const THROW_TIME_OUT = 420; // 7 seconds (const is in game ticks)
    const GK_TIME_OUT = 600; // 10 seconds (const is in game ticks)
    const CK_TIME_OUT = 600; // 10 seconds (const is in game ticks)
    const throwingDistance = 270; // distance players can move the ball during throw in
    let MAP_BG_COLOR = '86A578'; // default 718C5A
    const SUPER_ADMIN_CODE = '0310'; // !admin 0310
    const ALLOW_PUBLIC_ADMIN = true; // if true then !admin command is enabled
    let POWER_SHOT_MODE = true;
    const goldenGoal = true;

    // const RSMap = `{"name":"Vietnam Haxball League","width":1300,"height":670,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0,"color":"` + MAP_BG_COLOR + `"},"playerPhysics":{"bCoef":0.3,"invMass":0.5,"damping":0.96,"acceleration":0.12,"kickingAcceleration":0.07,"kickingDamping":0.96,"kickStrength":5.65},"ballPhysics":{"radius":9,"bCoef":0.5,"invMass":1.05,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]},"vertexes":[{"x":0,"y":675,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-675,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1300,"y":-460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":460,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":-1210,"y":-124,"bCoef":0.1,"cMask":["red","blue"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":-1210,"y":124,"bCoef":0.1,"cMask":["red","blue"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":1210,"y":124,"bCoef":0.1,"cMask":["red","blue"],"curve":-5},{"x":1150,"y":-124,"bCoef":0.1,"cMask":["ball","red","blue"]},{"x":1210,"y":-124,"bCoef":0.1,"cMask":["red","blue"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.9,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-460},{"v0":51,"v1":52,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":460},{"v0":53,"v1":54,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":54,"v1":55,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":55,"v1":56,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":57,"v1":58,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":58,"v1":59,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":59,"v1":60,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":61,"v1":62,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":-124},{"v0":63,"v1":64,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":124},{"v0":64,"v1":62,"curve":5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"bias":0},{"v0":62,"v1":65,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":64,"v1":66,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":67,"v1":68,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":124},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"],"y":-124},{"v0":68,"v1":70,"curve":-5,"color":"FFFFFF","bCoef":0.1,"cMask":["ball","red","blue"]},{"v0":70,"v1":71,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":68,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1161.45,124],"p1":[-1161.45,-124],"team":"red"},{"p0":[1161.45,124],"p1":[1161.45,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag","_data":{"mirror":{}}},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-460],"cMask":["none"]},{"radius":0,"pos":[1149,-460],"cMask":["none"]},{"radius":0,"pos":[-1149,-460],"cMask":["none"]},{"radius":0,"pos":[1149,-460],"cMask":["none"]},{"radius":0,"pos":[-1149,460],"cMask":["none"]},{"radius":0,"pos":[1149,460],"cMask":["none"]},{"radius":0,"pos":[-1149,460],"cMask":["none"]},{"radius":0,"pos":[1149,460],"cMask":["none"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,-670],"b":[1300,-670]}}},{"normal":[0,-1],"dist":-670,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-670,"canvas_rect":[-1311,-675,1300,675],"a":[-1311,670],"b":[1300,670]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[-1300,-675],"b":[-1300,675]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-675,1300,675],"a":[1300,-675],"b":[1300,675]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[-1230,-675],"b":[-1230,675]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-675,1300,675],"a":[1230,-675],"b":[1230,675]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"ec7458","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"48bef9","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"ec7458","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"48bef9","length":null}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}`;
    RSMapRaw.bg.color = MAP_BG_COLOR;
    const RSMap = JSON.stringify(RSMapRaw);
    console.log(RSMap);

    /*------------------------------ END OF STADIUMS ----------------------------*/

    // ------------------------------------------------
    // Global letiables
    // ------------------------------------------------
    const roomName = '️testenv';
    let password = null;
    let maxPlayers = 30;
    let publicRoom = false;
    let token = 'thr1.AAAAAGSjqnuAxiLofzEvcw.m_XT6gzHYuQ';
    let roomLink = '';
    let gameTime = 10; //default game time if 0 is selected
    let map = 'RSR';
    let superAdmins: any = [];

    let room = HBInit({
        roomName,
        password,
        maxPlayers,
        public: publicRoom,
        geo: { code: 'VN', lat: 16.8, lon: 107.0 },
        noPlayer: true,
        token,
    });
    let game: any;

    // -------------------------------------------------
    // Classes
    // -------------------------------------------------
    class Game {
        time = 0;
        paused = false;
        ballRadius: any;
        rsTouchTeam = 0;
        rsActive = true;
        rsReady = false;
        rsCorner = false;
        rsGoalKick = false;
        rsSwingTimer = 1000;
        rsTimer: any;
        ballOutPositionX: any;
        ballOutPositionY: any;
        throwInPosY: any;
        outStatus = '';
        warningCount = 0;
        bringThrowBack = false;
        extraTime = false;
        extraTimeCount = 0;
        extraTimeEnd: any;
        extraTimeAnnounced = false;
        lastPlayAnnounced = false;
        boosterState: any;
        throwinKicked = false;
        pushedOut: any;
        lastKickerId: any;
        lastKickerName: any;
        lastKickerTeam: any;
        secondLastKickerId: any;
        secondLastKickerName: any;
        secondLastKickerTeam: any;
        redScore = 0;
        blueScore = 0;
        powershotCounter = 0;
        powershotID = 0;
        powershotTrigger = false;

        updateLastKicker(id: any, name: any, team: any) {
            this.secondLastKickerId = this.lastKickerId;
            this.secondLastKickerName = this.lastKickerName;
            this.secondLastKickerTeam = this.lastKickerTeam;

            this.lastKickerId = id;
            this.lastKickerName = name;
            this.lastKickerTeam = team;
        }
    }

    room.setCustomStadium(RSMap);
    room.setScoreLimit(0);
    room.setTimeLimit(10);

    room.onRoomLink = (url: string) => {
        roomLink = url;
        console.log(roomLink);
    };

    room.onStadiumChange = (newStadiumName: any, byPlayer: any) => {
        byPlayer != null ? (map = 'custom') : (map = 'RSR');
    };

    room.onPlayerJoin = ({ id }: any) => {
        whisper(
            '⚽      Wᴇʟᴄᴏᴍᴇ ᴛᴏ Vietnam Haxball League     ⚽',
            id,
            0x61ddff,
            'bold',
            0,
        );
        whisper(
            '⚽      Type !help for available commands     ⚽',
            id,
            0x61e7ff,
            'bold',
            0,
        );
        whisper(
            '⚽      https://discord.gg/tAWSDgTq     ⚽',
            id,
            0x61e7ff,
            'bold',
            0,
        );
        displayAdminMessage();
    };

    room.onPlayerLeave = ({ id }: any) => {
        displayAdminMessage();

        let index = superAdmins.indexOf(id);
        if (index > -1) {
            sleep(100).then(() => {
                superAdmins.splice(index, 1);
            });
        }
    };

    room.onPlayerAdminChange = (changedPlayer: any, byPlayer: any) => {
        if (byPlayer != null) {
            if (changedPlayer.id != byPlayer.id) {
                if (superAdmins.indexOf(changedPlayer.id) > -1) {
                    room.kickPlayer(
                        byPlayer.id,
                        'You cannot remove a Super Admin',
                        false,
                    );
                    room.setPlayerAdmin(changedPlayer.id, true);
                }
            } else {
                if (!changedPlayer.admin) {
                    let index = superAdmins.indexOf(changedPlayer.id);
                    if (index > -1) {
                        superAdmins.splice(index, 1);
                    }
                }
            }
        }
    };

    room.onGameStart = (byPlayer: any) => {
        if (map == 'RSR') {
            room.setDiscProperties(0, { invMass: 1.05 });
            if (byPlayer == null) {
                game = new Game();
                announce('Game length set to ' + gameTime + ' minutes');
            } else {
                if (room.getScores().timeLimit !== 0) {
                    gameTime = room.getScores().timeLimit / 60;
                } else {
                    gameTime = 10;
                }
                room.stopGame();
                room.setTimeLimit(0);
                room.startGame();
            }
        }
    };

    room.onGameStop = (byPlayer: any) => {
        if (map == 'RSR') {
            if (byPlayer != null) {
                room.setTimeLimit(gameTime);
            }
        }
    };

    room.onPlayerBallKick = ({ team, id, name, pm }: any) => {
        if (map == 'RSR') {
            game.rsTouchTeam = team;
            game.updateLastKicker(id, name, team);

            //=========== POWERSHOT CODE ===========
            if (POWER_SHOT_MODE) {
                if (game.powershotCounter > 70) {
                    room.setDiscProperties(0, {
                        xgravity: -room.getPlayerDiscProperties(id).yspeed / 30,
                        ygravity: -room.getPlayerDiscProperties(id).yspeed / 30,
                    });
                    game.rsSwingTimer = 450;
                    room.sendAnnouncement(
                        'POWERSHOT APPLIED!',
                        pm,
                        0x33dddd,
                        'bold',
                        1,
                    );
                }
                game.powershotCounter = 0;
                game.powershotID = 0;
                game.powershotTrigger = false;
                if (
                    parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) !=
                    1.05
                ) {
                    room.setDiscProperties(0, { invMass: 1.05 });
                }
            }
            //=========== POWERSHOT CODE ===========

            if (game.rsReady) {
                let players = room
                    .getPlayerList()
                    .filter(({ team }: any) => team != 0);
                players.forEach(({ id }: any) => {
                    if (
                        room.getPlayerDiscProperties(id).invMass.toFixed(1) !=
                        0.3
                    ) {
                        room.setPlayerDiscProperties(id, { invMass: 0.3 });
                    }
                });
            }

            if (
                !game.rsActive &&
                game.rsReady &&
                (game.rsCorner || game.rsGoalKick)
            ) {
                // make game active on kick from CK/GK
                game.boosterState = true;

                game.rsActive = true;
                game.rsReady = false;
                room.setDiscProperties(1, { x: 2000, y: 2000 });
                room.setDiscProperties(2, { x: 2000, y: 2000 });
                room.setDiscProperties(0, { color: '0xffffff' });
                game.rsTimer = 1000000;

                // set gravity for real soccer corners/goalkicks
                if (game.rsCorner) {
                    room.setDiscProperties(0, {
                        xgravity:
                            (room.getPlayerDiscProperties(id).xspeed / 16) * -1,
                        ygravity:
                            (room.getPlayerDiscProperties(id).yspeed / 16) * -1,
                    });
                }
                if (game.rsGoalKick) {
                    room.setDiscProperties(0, {
                        xgravity: 0,
                        ygravity:
                            (room.getPlayerDiscProperties(id).yspeed / 20) * -1,
                    });
                }

                game.rsCorner = false;
                game.rsGoalKick = false;
                game.outStatus = '';
            }

            if (
                !game.rsActive &&
                (game.outStatus == 'redThrow' || game.outStatus == 'blueThrow')
            ) {
                game.outStatus = '';
                game.rsActive = true;
                game.rsReady = false;
                room.setDiscProperties(0, { color: '0xffffff' });
                game.rsTimer = 1000000;
                game.warningCount++;
            }
        }
    };

    room.onPlayerKicked = (kickedPlayer: any, byPlayer: any) => {
        if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
            room.kickPlayer(
                byPlayer.id,
                'You cannot kick/ban a Super Admin',
                false,
            );
            room.clearBans();
        }
    };

    room.onPlayerChat = ({ team, admin, id, name }: any, message: any) => {
        if (message.startsWith('!')) {
            message = message.toLowerCase();
            message = message.substr(1);
            let args = message.split(' ');

            if (args[0] == 'admin' && args.length == 1 && ALLOW_PUBLIC_ADMIN) {
                if (!isAdminPresent()) {
                    room.setPlayerAdmin(id, true);
                } else {
                    whisper(
                        'Admin is already present or !admin command is not allowed',
                        id,
                    );
                }
            } else if (args[0] == 'admin' && args.length == 2) {
                if (args[1] == SUPER_ADMIN_CODE) {
                    room.setPlayerAdmin(id, true);
                    if (superAdmins.indexOf(id) === -1) {
                        superAdmins.push(id);
                    }
                    announce(name + ' has gained Super Admin');
                }
            } else if (args[0] == 'clearbans') {
                if (admin) {
                    room.clearBans();
                    announce('Bans have been cleared by ' + name);
                } else {
                    whisper('Admin only command', id);
                }
            } else if (args[0] == 'court' && args.length == 1) {
                whisper('Current background color is ' + MAP_BG_COLOR);
            } else if (args[0] == 'court' && args.length == 2 && admin) {
                if (room.getScores() == null) {
                    if (args[1] == 'reset') {
                        MAP_BG_COLOR = '86A578';
                        announce('Map background color reset by ' + name);
                    } else {
                        MAP_BG_COLOR = args[1];
                        announce(
                            'Map background color set to ' +
                                args[1] +
                                ' by ' +
                                name,
                        );
                    }
                    room.setCustomStadium(RSMap);
                } else {
                    whisper(
                        'Cannot change map background color while game in progress',
                        id,
                    );
                }
            } else if (args[0] == 'swap') {
                if (admin) {
                    if (args.length == 1) {
                        let players = room
                            .getPlayerList()
                            .filter(({ id }: any) => id != 0);
                        if (players.length == 0) return false;
                        players.forEach(function ({ id }: any) {
                            if (team == 1) {
                                room.setPlayerTeam(id, 2);
                            }
                            if (team == 2) {
                                room.setPlayerTeam(id, 1);
                            }
                        });
                        announce('🔄 Teams have been swapped');
                    }
                } else {
                    whisper('Admin only command', id);
                }
            } else if (args[0] == 'setpassword' && admin) {
                if (superAdmins.indexOf(id) > -1) {
                    room.setPassword(args[1]);
                    password = args[1];
                    announce('Password has been changed by ' + name);
                } else {
                    whisper('Only Super Admins can change password', id);
                }
            } else if (args[0] == 'clearpassword' && admin) {
                if (superAdmins.indexOf(id) > -1) {
                    room.setPassword(null);
                    password = null;
                    announce('Password has been cleared by ' + name);
                } else {
                    whisper('Only Super Admins can clear password', id);
                }
            } else if (args[0] == 'rs' && admin) {
                if (room.getScores() == null) {
                    room.setCustomStadium(RSMap);
                } else {
                    whisper('Cannot change map while game in progress', id);
                }
            } else if (args[0] == 'rr' && admin) {
                room.stopGame();
                room.startGame();
            } else if (args[0] == 'bb') {
                room.kickPlayer(id, 'Bye', false);
            } else if ((args[0] == 'powershot' || args[0] == 'ps') && admin) {
                if (!POWER_SHOT_MODE) {
                    POWER_SHOT_MODE = true;
                    announce(
                        'POWERSHOT MODE ACTIVATED BY ' + name,
                        null,
                        0x00ff00,
                    );
                } else {
                    POWER_SHOT_MODE = false;
                    announce(
                        'POWERSHOT MODE DEACTIVATED BY ' + name,
                        null,
                        0xff0000,
                    );
                }
            } else if (args[0] == 'help') {
                displayHelp(id, args[1]);
            } else if (args[0] == 'super') {
                let superMsg = 'Super Admins: ';
                superAdmins.forEach((id: any) => {
                    if (
                        room.getPlayer(id) != null ||
                        room.getPlayer(id) != undefined
                    ) {
                        superMsg = superMsg + room.getPlayer(id).name + ', ';
                    }
                });
                if (superAdmins.length > 0) {
                    superMsg = superMsg.slice(0, -2);
                } else {
                    superMsg = 'There are no super admins present';
                }
                whisper(superMsg, id);
            }
            return false;
        }
        if (message.startsWith('t ')) {
            const teamMsg = message.substring(1).trim();
            const playerChatHandle = ({ teamId, name, teamMsg }: any) => {
                let players = room
                    .getPlayerList()
                    .filter(({ team }: any) => team == teamId);
                players.forEach(({ id }: any) => {
                    room.sendAnnouncement(
                        `[${teamId ? 'Team' : 'Spec'}] ${name}: ${teamMsg}`,
                        id,
                        teamId == 1
                            ? 0xed6a5a
                            : teamId == 2
                            ? 0x5995ed
                            : 0xdee7fa,
                        'normal',
                        1,
                    );
                });
            };

            playerChatHandle({ teamId: team, name, teamMsg });

            return false;
        }
        if (message.startsWith('@@')) {
            message = message.substr(2).trim();
            if (message.indexOf(' ') !== -1) {
                let args = message.match(/^(\S+)\s(.*)/).slice(1);

                if (args.length > 1) {
                    let pmMsg = args[1];
                    let players = room.getPlayerList();
                    let pmSent = false;
                    players.forEach(({ name, id }: any) => {
                        if (
                            name === args[0] ||
                            name === args[0].replace(/_/g, ' ')
                        ) {
                            whisper(
                                `[PM > ${name} ${name}: ${pmMsg}`,
                                id,
                                0xff20ff,
                                'normal',
                                1,
                            );
                            whisper(
                                `[PM] ${name}: ${pmMsg}`,
                                id,
                                0xff20ff,
                                'normal',
                                1,
                            );
                            pmSent = true;
                        }
                    });
                    if (!pmSent) {
                        whisper(
                            `Cannot find user '${args[0]}'`,
                            id,
                            0xff20ff,
                            'normal',
                            1,
                        );
                    }
                    return false;
                }
            }
        }
    };

    const displayHelp = (id: any, selection: any) => {
        if (selection == null) {
            whisper(
                'Commands: !rs, !rr, !bb, !powershot, !ps, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, t [team chat msg], !court, !court [hexcolor], !court reset',
                id,
                null,
                'small',
            );
        }
    };

    room.onPlayerTeamChange = () => {
        if (map == 'RSR') {
            if (room.getScores() != null) {
                if (game.rsActive) {
                    room.getPlayerList().forEach((player: any) => {
                        if (player != undefined) {
                            if (game.rsGoalKick || game.rsCorner) {
                                room.setPlayerDiscProperties(player.id, {
                                    invMass: 9999999,
                                });
                            }
                        }
                    });
                }
            }
        }
    };

    room.onTeamGoal = (team: any) => {
        if (map == 'RSR') {
            game.rsActive = false;

            let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
            let scorer;
            let assister = '';
            let goalType;
            if (team == 1) {
                if (game.lastKickerTeam == 1) {
                    //if goal type is goal
                    goalType = 'GOAL!';
                    scorer = '⚽' + game.lastKickerName;
                    avatarCelebration(game.lastKickerId, '⚽');
                    if (
                        game.secondLastKickerTeam == 1 &&
                        game.lastKickerId != game.secondLastKickerId
                    ) {
                        // if assist is from teammate
                        assister =
                            ' (Assist: ' + game.secondLastKickerName + ')';
                        avatarCelebration(game.secondLastKickerId, '🅰️');
                    }
                }
                if (game.lastKickerTeam == 2) {
                    //if goal type is owngoal
                    goalType = 'OWN GOAL!';
                    scorer = '🐸' + game.lastKickerName;
                    avatarCelebration(game.lastKickerId, '🐸');
                    if (game.secondLastKickerTeam == 1) {
                        // if owngoal was assisted
                        assister =
                            ' (Assist: ' + game.secondLastKickerName + ')';
                        avatarCelebration(game.secondLastKickerId, '🅰️');
                    }
                }
                game.redScore++;
            } else if (team == 2) {
                if (game.lastKickerTeam == 2) {
                    //if goal type is goal
                    goalType = 'GOAL!';
                    scorer = '⚽' + game.lastKickerName;
                    avatarCelebration(game.lastKickerId, '⚽');
                    if (
                        game.secondLastKickerTeam == 2 &&
                        game.lastKickerId != game.secondLastKickerId
                    ) {
                        // if assist is from teammate
                        assister =
                            ' (Assist: ' + game.secondLastKickerName + ')';
                        avatarCelebration(game.secondLastKickerId, '🅰️');
                    }
                }
                if (game.lastKickerTeam == 1) {
                    //if goal type is owngoal
                    goalType = 'OWN GOAL!';
                    scorer = '🐸' + game.lastKickerName;
                    avatarCelebration(game.lastKickerId, '🐸');
                    if (game.secondLastKickerTeam == 2) {
                        // if owngoal was assisted
                        assister =
                            ' (Assist: ' + game.secondLastKickerName + ')';
                        avatarCelebration(game.secondLastKickerId, '🅰️');
                    }
                }
                game.blueScore++;
            }
            announce(
                goalType +
                    ' 🟥 ' +
                    game.redScore +
                    ' - ' +
                    game.blueScore +
                    ' 🟦 🕒' +
                    goalTime +
                    ' ' +
                    scorer +
                    assister,
            );
            game.lastKicker = undefined;
            game.secondLastKicker = undefined;
            game.lastKickerTeam = undefined;
            game.secondLastKickerTeam = undefined;
        }
    };

    room.onPositionsReset = () => {
        if (map == 'RSR') {
            if (game.lastPlayAnnounced) {
                room.pauseGame(true);
                game.lastPlayAnnounced = false;
                announce('END');
            }
        }
    };

    room.onGameTick = () => {
        if (map == 'RSR') {
            updateGameStatus();
            handleBallTouch();
            realSoccerRef();
        }
    };

    function realSoccerRef() {
        blockThrowIn();
        blockGoalKick();
        removeBlock();
        if (game.time == gameTime * 60 && !game.extraTimeAnnounced) {
            extraTime();
            game.extraTimeAnnounced = true;
        }

        if (game.time == game.extraTimeEnd && !game.lastPlayAnnounced) {
            announce('Last play', null, null, null, 1);
            game.lastPlayAnnounced = true;
        }

        if (game.rsCorner || game.rsGoalKick) {
            //add extra time
            game.extraTimeCount++;
        }

        if (
            game.rsTimer < 99999 &&
            !game.paused &&
            !game.rsActive &&
            game.rsReady
        ) {
            game.rsTimer++;
        }

        if (game.rsSwingTimer < 150 && !game.rsCorner && !game.rsGoalKick) {
            game.rsSwingTimer++;
            if (game.rsSwingTimer > 5) {
                room.setDiscProperties(0, {
                    xgravity: room.getDiscProperties(0).xgravity * 0.97,
                    ygravity: room.getDiscProperties(0).ygravity * 0.97,
                });
            }
            if (game.rsSwingTimer == 150) {
                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
            }
        }

        if (game.boosterState) {
            game.boosterCount++;
        }

        if (game.boosterCount > 30) {
            game.boosterState = false;
            game.boosterCount = 0;
            room.setDiscProperties(0, { cMask: 63 });
        }

        if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {
            game.rsActive = true;
            game.outStatus = '';
        }

        if (!game.rsActive && game.rsReady) {
            //expire barrier time
            if (game.outStatus == 'redThrow') {
                if (game.rsTimer == THROW_TIME_OUT - 120) {
                    // warning indicator
                    ballWarning('0xff3f34', ++game.warningCount);
                }
                if (game.rsTimer == THROW_TIME_OUT && !game.bringThrowBack) {
                    // switch to blue throw
                    game.outStatus = 'blueThrow';
                    game.rsTimer = 0;
                    room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    sleep(100).then(() => {
                        room.setDiscProperties(0, {
                            color: '0x0fbcf9',
                            xspeed: 0,
                            yspeed: 0,
                            x: game.ballOutPositionX,
                            y: game.throwInPosY,
                        });
                    });
                }
            } else if (game.outStatus == 'blueThrow') {
                if (game.rsTimer == THROW_TIME_OUT - 120) {
                    // warning indicator
                    ballWarning('0x0fbcf9', ++game.warningCount);
                }
                if (game.rsTimer == THROW_TIME_OUT && !game.bringThrowBack) {
                    // switch to red throw
                    game.outStatus = 'redThrow';
                    game.rsTimer = 0;
                    room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    sleep(100).then(() => {
                        room.setDiscProperties(0, {
                            color: '#ff3f34',
                            xspeed: 0,
                            yspeed: 0,
                            x: game.ballOutPositionX,
                            y: game.throwInPosY,
                        });
                    });
                }
            } else if (
                game.outStatus == 'blueGK' ||
                game.outStatus == 'redGK'
            ) {
                if (game.rsTimer == GK_TIME_OUT - 120) {
                    // warning indicator
                    if (game.outStatus == 'blueGK') {
                        ballWarning('0x0fbcf9', ++game.warningCount);
                    }
                    if (game.outStatus == 'redGK') {
                        ballWarning('0xff3f34', ++game.warningCount);
                    }
                }
                if (game.rsTimer == GK_TIME_OUT) {
                    game.outStatus = '';
                    room.setDiscProperties(0, { color: '0xffffff' });
                    game.rsTimer = 1000000;
                }
            } else if (
                game.outStatus == 'blueCK' ||
                game.outStatus == 'redCK'
            ) {
                if (game.rsTimer == CK_TIME_OUT - 120) {
                    if (game.outStatus == 'blueCK') {
                        ballWarning('0x0fbcf9', ++game.warningCount);
                    }
                    if (game.outStatus == 'redCK') {
                        ballWarning('0xff3f34', ++game.warningCount);
                    }
                }
                if (game.rsTimer == CK_TIME_OUT) {
                    game.outStatus = '';
                    room.setDiscProperties(1, { x: 0, y: 2000, radius: 0 });
                    room.setDiscProperties(2, { x: 0, y: 2000, radius: 0 });
                    room.setDiscProperties(0, { color: '0xffffff' });
                    game.rsTimer = 1000000;
                }
            }
        }

        if (game.rsActive) {
            if (
                room.getBallPosition().y > 611.45 ||
                room.getBallPosition().y < -611.45
            ) {
                game.rsActive = false;
                if (game.lastPlayAnnounced) {
                    room.pauseGame(true);
                    game.lastPlayAnnounced = false;
                    announce('END');
                }

                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });

                game.ballOutPositionX =
                    Math.round(room.getBallPosition().x * 10) / 10;
                if (room.getBallPosition().y > 611.45) {
                    game.ballOutPositionY = 400485;
                    game.throwInPosY = 610;
                }
                if (room.getBallPosition().y < -611.45) {
                    game.ballOutPositionY = -400485;
                    game.throwInPosY = -610;
                }
                if (room.getBallPosition().x > 1130) {
                    game.ballOutPositionX = 1130;
                }
                if (room.getBallPosition().x < -1130) {
                    game.ballOutPositionX = -1130;
                }

                if (game.rsTouchTeam == 1) {
                    room.setDiscProperties(3, {
                        x: game.ballOutPositionX,
                        y: game.throwInPosY,
                        radius: 18,
                    });
                    sleep(100).then(() => {
                        game.outStatus = 'blueThrow';
                        game.throwinKicked = false;
                        game.rsTimer = 0;
                        game.rsReady = true;
                        room.setDiscProperties(0, {
                            xspeed: 0,
                            yspeed: 0,
                            x: game.ballOutPositionX,
                            y: game.throwInPosY,
                            xgravity: 0,
                            ygravity: 0,
                        });
                        //announce("🖐️ Throw In: 🔵 Blue");
                        room.setDiscProperties(0, { color: '0x0fbcf9' });
                    });
                    sleep(100).then(() => {
                        room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    });
                } else {
                    room.setDiscProperties(3, {
                        x: game.ballOutPositionX,
                        y: game.throwInPosY,
                        radius: 18,
                    });
                    sleep(100).then(() => {
                        game.outStatus = 'redThrow';
                        game.throwinKicked = false;
                        game.rsTimer = 0;
                        game.rsReady = true;
                        room.setDiscProperties(0, {
                            xspeed: 0,
                            yspeed: 0,
                            x: game.ballOutPositionX,
                            y: game.throwInPosY,
                            xgravity: 0,
                            ygravity: 0,
                        });
                        //announce("🖐️ Throw In: 🔴 Red");
                        room.setDiscProperties(0, { color: '0xff3f34' });
                    });
                    sleep(100).then(() => {
                        room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    });
                }
            }

            if (
                room.getBallPosition().x > 1161.45 &&
                (room.getBallPosition().y > 124 ||
                    room.getBallPosition().y < -124)
            ) {
                game.rsActive = false;
                if (game.lastPlayAnnounced) {
                    room.pauseGame(true);
                    game.lastPlayAnnounced = false;
                    announce('END');
                }
                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                room.getPlayerList().forEach(({ id }: any) => {
                    room.setPlayerDiscProperties(id, { invMass: 100000 });
                });

                if (game.rsTouchTeam == 1) {
                    room.setDiscProperties(3, { x: 1060, y: 0, radius: 18 });
                    sleep(100).then(() => {
                        game.outStatus = 'blueGK';
                        game.rsTimer = 0;
                        game.rsReady = true;
                        //announce("🥅 Goal Kick: 🔵 Blue");
                        game.rsGoalKick = true;
                        game.rsSwingTimer = 0;
                        game.boosterCount = 0;
                        game.boosterState = false;
                        room.setDiscProperties(0, {
                            xspeed: 0,
                            yspeed: 0,
                            x: 1060,
                            y: 0,
                            color: '0x0fbcf9',
                            cMask: 268435519,
                            xgravity: 0,
                            ygravity: 0,
                        });
                    });
                    sleep(3000).then(() => {
                        room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    });
                } else {
                    //announce("🚩 Corner Kick: 🔴 Red");
                    game.rsSwingTimer = 0;
                    if (room.getBallPosition().y < -124) {
                        room.setDiscProperties(3, {
                            x: 1140,
                            y: -590,
                            radius: 18,
                        });
                        sleep(100).then(() => {
                            game.rsCorner = true;
                            game.outStatus = 'redCK';
                            game.rsTimer = 0;
                            game.rsReady = true;
                            game.boosterCount = 0;
                            game.boosterState = false;
                            room.setDiscProperties(0, {
                                x: 1140,
                                y: -590,
                                xspeed: 0,
                                yspeed: 0,
                                color: '0xff3f34',
                                cMask: 268435519,
                                xgravity: 0,
                                ygravity: 0,
                            });
                            room.setDiscProperties(2, {
                                x: 1150,
                                y: -670,
                                radius: 420,
                            });
                            room.setDiscProperties(3, {
                                x: 0,
                                y: 2000,
                                radius: 0,
                            });
                        });
                    }
                    if (room.getBallPosition().y > 124) {
                        room.setDiscProperties(3, {
                            x: 1140,
                            y: 590,
                            radius: 18,
                        });
                        sleep(100).then(() => {
                            game.rsCorner = true;
                            game.outStatus = 'redCK';
                            game.rsTimer = 0;
                            game.rsReady = true;
                            game.boosterCount = 0;
                            game.boosterState = false;
                            room.setDiscProperties(0, {
                                x: 1140,
                                y: 590,
                                xspeed: 0,
                                yspeed: 0,
                                color: '0xff3f34',
                                cMask: 268435519,
                                xgravity: 0,
                                ygravity: 0,
                            });
                            room.setDiscProperties(2, {
                                x: 1150,
                                y: 670,
                                radius: 420,
                            });
                            room.setDiscProperties(3, {
                                x: 0,
                                y: 2000,
                                radius: 0,
                            });
                        });
                    }
                }
            }
            if (
                room.getBallPosition().x < -1161.45 &&
                (room.getBallPosition().y > 124 ||
                    room.getBallPosition().y < -124)
            ) {
                game.rsActive = false;
                if (game.lastPlayAnnounced) {
                    room.pauseGame(true);
                    game.lastPlayAnnounced = false;
                    announce('END');
                }
                room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                room.getPlayerList().forEach(({ id }: any) => {
                    room.setPlayerDiscProperties(id, { invMass: 100000 });
                });

                if (game.rsTouchTeam == 1) {
                    //announce("🚩 Corner Kick: 🔵 Blue");
                    game.rsSwingTimer = 0;
                    if (room.getBallPosition().y < -124) {
                        room.setDiscProperties(3, {
                            x: -1140,
                            y: -590,
                            radius: 18,
                        });
                        sleep(100).then(() => {
                            game.rsCorner = true;
                            game.outStatus = 'blueCK';
                            game.rsTimer = 0;
                            game.rsReady = true;
                            game.boosterCount = 0;
                            game.boosterState = false;
                            room.setDiscProperties(0, {
                                x: -1140,
                                y: -590,
                                xspeed: 0,
                                yspeed: 0,
                                color: '0x0fbcf9',
                                cMask: 268435519,
                                xgravity: 0,
                                ygravity: 0,
                            });
                            room.setDiscProperties(1, {
                                x: -1150,
                                y: -670,
                                radius: 420,
                            });
                            room.setDiscProperties(3, {
                                x: 0,
                                y: 2000,
                                radius: 0,
                            });
                        });
                    }
                    if (room.getBallPosition().y > 124) {
                        room.setDiscProperties(3, {
                            x: -1140,
                            y: 590,
                            radius: 18,
                        });
                        sleep(100).then(() => {
                            game.rsCorner = true;
                            game.outStatus = 'blueCK';
                            game.rsTimer = 0;
                            game.rsReady = true;
                            game.boosterCount = 0;
                            game.boosterState = false;

                            room.setDiscProperties(0, {
                                x: -1140,
                                y: 590,
                                xspeed: 0,
                                yspeed: 0,
                                color: '0x0fbcf9',
                                cMask: 268435519,
                                xgravity: 0,
                                ygravity: 0,
                            });
                            room.setDiscProperties(1, {
                                x: -1150,
                                y: 670,
                                radius: 420,
                            });
                            room.setDiscProperties(3, {
                                x: 0,
                                y: 2000,
                                radius: 0,
                            });
                        });
                    }
                } else {
                    room.setDiscProperties(3, { x: -1060, y: 0, radius: 18 });
                    sleep(100).then(() => {
                        game.outStatus = 'redGK';
                        game.rsTimer = 0;
                        game.rsReady = true;
                        //announce("🥅 Goal Kick: 🔴 Red");
                        game.rsGoalKick = true;
                        game.rsSwingTimer = 0;
                        game.boosterCount = 0;
                        game.boosterState = false;
                        room.setDiscProperties(0, {
                            xspeed: 0,
                            yspeed: 0,
                            x: -1060,
                            y: 0,
                            color: '0xff3f34',
                            cMask: 268435519,
                            xgravity: 0,
                            ygravity: 0,
                        });
                    });
                    sleep(3000).then(() => {
                        room.setDiscProperties(3, { x: 0, y: 2000, radius: 0 });
                    });
                }
            }
        }
    }

    function handleBallTouch() {
        let players = room.getPlayerList();
        let ballPosition = room.getBallPosition();
        let ballRadius = game.ballRadius;
        let playerRadius = 15;
        let triggerDistance = ballRadius + playerRadius + 0.01;

        for (let i = 0; i < players.length; i++) {
            // Iterate over all the players
            let { position, team, id } = players[i];
            if (position == null) continue;
            let distanceToBall = pointDistance(position, ballPosition);
            if (distanceToBall < triggerDistance) {
                game.rsTouchTeam = team;
                game.throwinKicked = false;

                //=========== POWERSHOT CODE ===========
                if (
                    !game.rsCorner &&
                    !game.rsGoalKick &&
                    game.outStatus != 'blueThrow' &&
                    game.outStatus != 'redThrow' &&
                    POWER_SHOT_MODE
                ) {
                    if (game.powershotID != id) {
                        game.powershotID = id;
                        game.powershotTrigger = false;
                        game.powershotCounter = 0;
                    } else {
                        game.powershotCounter++;
                        //room.sendAnnouncement("Powershot counter: " + game.powershotCounter, null, 0x333333, "small-bold", 0);
                        if (
                            game.powershotCounter > 100 &&
                            !game.powershotTrigger &&
                            Math.round(room.getDiscProperties(0).invMass) != 2
                        ) {
                            room.setDiscProperties(0, { invMass: 2 });
                            room.sendAnnouncement(
                                'POWERSHOT ACTIVATED!',
                                game.powershotID,
                                0x33dd33,
                                'bold',
                                1,
                            );
                            game.powershotTrigger = true;
                        }
                    }
                }
                //=========== POWERSHOT CODE ===========

                if (!game.rsCorner && room.getDiscProperties(0).xgravity != 0) {
                    room.setDiscProperties(0, { xgravity: 0, ygravity: 0 });
                    game.rsSwingTimer = 10000;
                }
            }
            //=========== POWERSHOT CODE ===========
            if (
                distanceToBall > triggerDistance + 3 &&
                id == game.powershotID &&
                game.powershotTrigger &&
                POWER_SHOT_MODE
            ) {
                game.powershotTrigger = false;
                game.powershotCounter = 0;
                game.powershotid = 0;
                if (
                    parseFloat(room.getDiscProperties(0).invMass.toFixed(2)) !=
                    1.05
                ) {
                    room.setDiscProperties(0, { invMass: 1.05 });
                    room.sendAnnouncement(
                        'POWERSHOT CANCELLED!',
                        game.powershotID,
                        0xdd3333,
                        'bold',
                        2,
                    );
                }
            }
            //=========== POWERSHOT CODE ===========
        }
    }

    function updateGameStatus() {
        game.time = Math.floor(room.getScores().time);
        game.ballRadius = room.getDiscProperties(0).radius;
    }

    function announce(
        msg: string,
        targetId?: any,
        color?: any,
        style?: any,
        sound?: any,
    ) {
        if (color == null) {
            color = 0xfffd82;
        }
        if (style == null) {
            style = 'bold';
        }
        if (sound == null) {
            sound = 0;
        }
        room.sendAnnouncement(msg, targetId, color, style, sound);
    }

    function whisper(
        msg: string,
        targetId?: any,
        color?: any,
        style?: any,
        sound = 0,
    ) {
        style ??= 'normal';
        color ??= 0x66c7ff;
        room.sendAnnouncement(msg, targetId, color, style, sound);
    }

    function isAdminPresent() {
        let players = room.getPlayerList();
        return players.find(({ admin }: any) => admin) != null ? true : false;
    }

    function displayAdminMessage() {
        if (!isAdminPresent() && ALLOW_PUBLIC_ADMIN) {
            announce('No admin present: Type !admin to take control');
        }
    }

    function pointDistance(p1: any, p2: any) {
        let d1 = p1.x - p2.x;
        let d2 = p1.y - p2.y;
        return Math.sqrt(d1 * d1 + d2 * d2);
    }

    function sleep(time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function ballWarning(origColour: any, warningCount: any) {
        for (let i = 1; i <= 10; i++) {
            await sleep(200);
            if (game.warningCount == warningCount) {
                room.setDiscProperties(0, {
                    color: i % 2 === 1 ? '0xffffff' : origColour,
                });
            }
        }
    }

    function extraTime() {
        let extraSeconds = Math.ceil(game.extraTimeCount / 60);
        game.extraTimeEnd = gameTime * 60 + extraSeconds;
        announce(
            'Extra time: ' + extraSeconds + ' Seconds',
            null,
            null,
            null,
            1,
        );
    }

    async function avatarCelebration(playerId: any, avatar: any) {
        room.setPlayerAvatar(playerId, avatar);
        for (let i = 1; i <= 13; i++) {
            await sleep(250);
            room.setPlayerAvatar(playerId, i % 2 === 1 ? null : avatar);
        }
    }

    function secondsToMinutes(time: any) {
        // Hours, minutes and seconds
        let hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = '';
        if (hrs > 0) {
            ret += `${hrs}:${mins < 10 ? '0' : ''}`;
        }
        ret += `${mins}:${secs < 10 ? '0' : ''}`;
        ret += secs;
        return ret;
    }

    function blockThrowIn() {
        let players = room.getPlayerList().filter(({ team }: any) => team != 0);
        if (room.getBallPosition().y < 0) {
            // top throw line
            switch (game.outStatus) {
                case 'redThrow':
                    players.forEach(({ id, team, position }: any) => {
                        if (
                            room.getPlayerDiscProperties(id).invMass != 9999999
                        ) {
                            room.setPlayerDiscProperties(id, {
                                invMass: 9999999,
                            });
                        }
                        if (
                            team == 2 &&
                            room.getPlayerDiscProperties(id).y < 0
                        ) {
                            if (
                                room.getPlayerDiscProperties(id).cGroup !=
                                536870918
                            ) {
                                room.setPlayerDiscProperties(id, {
                                    cGroup: 536870918,
                                });
                            }
                            if (position.y < -460) {
                                room.setPlayerDiscProperties(id, { y: -445 });
                            }
                        }
                        if (
                            team == 1 &&
                            room.getPlayerDiscProperties(id).cGroup != 2
                        ) {
                            room.setPlayerDiscProperties(id, { cGroup: 2 });
                        }

                        getSetDiscProperties(17, 1149);
                        getSetDiscProperties(19, -1149);
                    });
                    break;
                case 'blueThrow':
                    players.forEach(({ team, id, position }: any) => {
                        if (
                            room.getPlayerDiscProperties(id).invMass != 9999999
                        ) {
                            room.setPlayerDiscProperties(id, {
                                invMass: 9999999,
                            });
                        }
                        if (
                            team == 1 &&
                            room.getPlayerDiscProperties(id).y < 0
                        ) {
                            if (
                                room.getPlayerDiscProperties(id).cGroup !=
                                536870918
                            ) {
                                room.setPlayerDiscProperties(id, {
                                    cGroup: 536870918,
                                });
                            }
                            if (position.y < -460) {
                                room.setPlayerDiscProperties(id, { y: -445 });
                            }
                        }
                        if (
                            team == 2 &&
                            room.getPlayerDiscProperties(id).cGroup != 2
                        ) {
                            room.setPlayerDiscProperties(id, { cGroup: 2 });
                        }
                        getSetDiscProperties(19, 1149);
                        getSetDiscProperties(17, -1149);
                    });
                    break;
            }
        } else if (room.getBallPosition().y > 0) {
            // bottom throw line
            switch (game.outStatus) {
                case 'redThrow':
                    players.forEach(({ team, id, position }: any) => {
                        if (
                            room.getPlayerDiscProperties(id).invMass != 9999999
                        ) {
                            room.setPlayerDiscProperties(id, {
                                invMass: 9999999,
                            });
                        }
                        if (
                            team == 2 &&
                            room.getPlayerDiscProperties(id).y > 0
                        ) {
                            if (
                                room.getPlayerDiscProperties(id).cGroup !=
                                536870918
                            ) {
                                room.setPlayerDiscProperties(id, {
                                    cGroup: 536870918,
                                });
                            }
                            if (position.y > 460) {
                                room.setPlayerDiscProperties(id, { y: 445 });
                            }
                        }
                        if (
                            team == 1 &&
                            room.getPlayerDiscProperties(id).cGroup != 2
                        ) {
                            room.setPlayerDiscProperties(id, { cGroup: 2 });
                        }
                        getSetDiscProperties(21, 1149);
                        getSetDiscProperties(23, -1149);
                    });
                    break;
                case 'blueThrow':
                    players.forEach(({ id, team, position }: any) => {
                        if (
                            room.getPlayerDiscProperties(id).invMass != 9999999
                        ) {
                            room.setPlayerDiscProperties(id, {
                                invMass: 9999999,
                            });
                        }
                        if (
                            team == 1 &&
                            room.getPlayerDiscProperties(id).y > 0
                        ) {
                            if (
                                room.getPlayerDiscProperties(id).cGroup !=
                                536870918
                            ) {
                                room.setPlayerDiscProperties(id, {
                                    cGroup: 536870918,
                                });
                            }
                            if (position.y > 460) {
                                room.setPlayerDiscProperties(id, { y: 445 });
                            }
                        }
                        if (
                            team == 2 &&
                            room.getPlayerDiscProperties(id).cGroup != 2
                        ) {
                            room.setPlayerDiscProperties(id, { cGroup: 2 });
                        }
                        getSetDiscProperties(23, 1149);
                        getSetDiscProperties(21, -1149);
                    });
                    break;
            }
        }
    }

    function blockGoalKick() {
        let players = room.getPlayerList().filter(({ team }: any) => team != 0);
        if (room.getBallPosition().x < 0) {
            // left side red goal kick
            if (game.outStatus == 'redGK') {
                players.forEach(({ id, team, position }: any) => {
                    if (team == 2 && room.getPlayerDiscProperties(id).x < 0) {
                        if (
                            room.getPlayerDiscProperties(id).cGroup != 268435462
                        ) {
                            room.setPlayerDiscProperties(id, {
                                cGroup: 268435462,
                            });
                        }
                        if (
                            position.x < -840 &&
                            position.y > -320 &&
                            position.y < 320
                        ) {
                            room.setPlayerDiscProperties(id, { x: -825 });
                        }
                    }
                    if (
                        team == 1 &&
                        room.getPlayerDiscProperties(id).cGroup != 2
                    ) {
                        room.setPlayerDiscProperties(id, { cGroup: 2 });
                    }
                });
            }
        } else if (room.getBallPosition().x > 0) {
            // right side blue goal kick
            if (game.outStatus == 'blueGK') {
                players.forEach(({ team, id, position }: any) => {
                    if (team == 1 && room.getPlayerDiscProperties(id).x > 0) {
                        if (
                            room.getPlayerDiscProperties(id).cGroup != 268435462
                        ) {
                            room.setPlayerDiscProperties(id, {
                                cGroup: 268435462,
                            });
                        }
                        if (
                            position.x > 840 &&
                            position.y > -320 &&
                            position.y < 320
                        ) {
                            room.setPlayerDiscProperties(id, { x: 825 });
                        }
                    }
                    if (
                        team == 2 &&
                        room.getPlayerDiscProperties(id).cGroup != 2
                    ) {
                        room.setPlayerDiscProperties(id, { cGroup: 2 });
                    }
                });
            }
        }
    }

    function removeBlock() {
        let players = room.getPlayerList().filter(({ team }: any) => team != 0);
        if (game.outStatus == '') {
            players.forEach(({ team, id }: any) => {
                if (team == 1 && room.getPlayerDiscProperties(id).cGroup != 2) {
                    room.setPlayerDiscProperties(id, { cGroup: 2 });
                }
                if (team == 2 && room.getPlayerDiscProperties(id).cGroup != 4) {
                    room.setPlayerDiscProperties(id, { cGroup: 4 });
                }
            });

            for (let i = 17; i <= 23; i += 2) {
                getSetDiscProperties(i, -1149);
            }
        }
    }

    function getSetDiscProperties(i: number, x: number) {
        if (room.getDiscProperties(i).x != x) {
            room.setDiscProperties(i, { x });
        }
    }

    // console.log({ room, game });
})();
