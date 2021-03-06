var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.arePointsEquals = function(){
    if(this.P1point === this.P2point)
        return true;
    return false;
};

TennisGame2.prototype.getTheScoreOfPlayer1WheIsUnderFour = function() {
    if (this.P1point === 0)
        return "Love";
    if (this.P1point === 1)
        return  "Fifteen";
    if (this.P1point === 2)
        return "Thirty";
    if (this.P1point === 3)
        return "Forty";
};

TennisGame2.prototype.getTheScoreOfPlayer2WheIsUnderFour = function() {
    if (this.P2point === 0)
        return "Love";
    if (this.P2point === 1)
        return  "Fifteen";
    if (this.P2point === 2)
        return "Thirty";
    if (this.P2point === 3)
        return "Forty";
};
TennisGame2.prototype.areThereLessThanFourPoints = function() {
    if(this.P1point < 4 || this.P2point < 4 )
        return true;
    return false;
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.arePointsEquals() && this.P1point < 3) {
        score = this.getTheScoreOfPlayer1WheIsUnderFour();
        score += "-All";
    }
    if (this.arePointsEquals() && this.P1point > 2)
        score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        this.P1res = this.getTheScoreOfPlayer1WheIsUnderFour();
        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
        this.P2res = this.getTheScoreOfPlayer2WheIsUnderFour()
        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    if (!this.arePointsEquals() && this.areThereLessThanFourPoints()) {
        score = this.getTheScoreOfPlayer1WheIsUnderFour() + "-" + this.getTheScoreOfPlayer2WheIsUnderFour();
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}