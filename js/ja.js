		<!doctype html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<title>Space Game Demo</title>
			</head>
			<body>
				<section>
					<div>
						<canvas id="canvas" width="800" height="600">
							Your browser does not support HTML5.
						</canvas>
					</div>
					<script type="text/javascript">
		//Start of script
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		var x = 400;
		var y = 0;
		var direction = 0;
		var mouseDown = false;
		var gloop;
		var shots = new Array;
		var playerTurret = new (function() { //turret object
			var that = this;
			that.draw = function() {
				ctx.fillStyle = "white";
				ctx.strokeStyle = "white";
				ctx.rect(380, 540, 40, 60); //draw base
				ctx.fill();

				ctx.beginPath();
				ctx.arc(400, 540, 20, Math.PI, 2*Math.PI);
				ctx.fill();

				ctx.beginPath();
				ctx.lineWidth="10";
				ctx.moveTo(400, 540);
				var tempX, tempY, temp;
				temp = getTrajectory(x, y);
				tempX = 35 * temp[0]; tempY = 35 * temp[1];
				ctx.lineTo(tempX + 400, 540 - tempY);
				ctx.stroke();
			}
		});

		function shotObject(shotX, shotY) {
			var that = this;
			that.traj = getTrajectory(shotX, shotY);
			that.vel = 10;
			that.pos = [400, 540];
			that.draw = function() {
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.arc(that.pos[0], that.pos[1], 5, 0, 2 * Math.PI);
				ctx.fill();
			}
			that.move = function() {
				that.pos[0] += that.vel * that.traj[0];
				that.pos[1] -= that.vel * that.traj[1];
				if (that.pos[0] < -10 || that.pos[0] > 810 || that.pos[1] < -10 || that.pos[1] > 610) {
					shots.splice(shots.indexOf(that), 1);
				}
			}
		};

		function getTrajectory(coordx, coordy) {
			var tempX, tempY, neg = false;
			if (coordx == 400)  {
				if (coordy <= 540) {
					direction = degToRad(90);
				}
				else {
					direction = degToRad(270);
				}
			}
			else {
				direction = Math.atan((540 - coordy)/(coordx - 400));
				if (coordx < 400) {
					neg = true;
				}
			}
			tempX = Math.cos(direction);
			tempY = Math.sin(direction);
			if (neg) {
				tempX = -tempX;
				tempY = -tempY;
				neg = false;
			}
			return [tempX, tempY];
		};

		function degToRad(angle) {
			return angle * (Math.PI/180);
		}; //end degToRad()

		function getMousePos(canvas, e) {
			var rect = canvas.getBoundingClientRect();
			return {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			};
		};

		function process() {
			for (var i = 0; i < shots.length; i++) {
				shots[i].move();
			};
			for (var i = 0; i < aliens.length; i++) {
				aliens[i].move();
			};
		};

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			playerTurret.draw();
			for (var i = 0; i < shots.length; i++) {
				shots[i].draw();
			};
		}; //end draw()

		function loop() {
			process();
			draw();
			gloop = setTimeout(loop, 25);
		}; //end loop()

		canvas.addEventListener('mousemove', function(e) {
			var mousePos = getMousePos(canvas, e);
			x = mousePos.x;
			y = mousePos.y;
		}, false);

		canvas.addEventListener('mousedown', function(e) {
			var mousePos = getMousePos(canvas, e);
			var shotX = mousePos.x;
			var shotY = mousePos.y;
			shots.push(new shotObject(shotX, shotY));
			mouseDown = true;
		}, false);

		canvas.addEventListener('mouseup', function(e) {
			mouseDown = false;
		});

		loop();

					</script>
				</section>
			</body>
		</html>