import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	let display: string = "";
	let value1: number = 0;
	let value2: number = 0;
	let operador: string = "";
	let input: string = ""; 

	function calcular() {

	}

	function definirOperador(op: string) {
		if (operador != "") {
			operador = op;
			console.log("operador atual:", operador)
		} else {
			console.log("operador ja definido")
		}
	}

	function definirNumeros() {

		if (operador == "") {
			//value1 = input;
		}else {
			//value2 = input
		}
	}

	function updateInput(novo : string){
		input += novo;
		display = input;
		console.log("novoInput:", input);
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.resultado}><Text style={styles.digito}>{display}</Text></View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>C</Text>
						</TouchableOpacity>
					</View >
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>CE</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>%</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={() => definirOperador("/")}>
							<Text style={styles.digito}>/</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("7")}>
							<Text style={styles.digito}>7</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("8")}>
							<Text style={styles.digito}>8</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("9")}>
							<Text style={styles.digito}>9</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={() => definirOperador("X")}>
							<Text style={styles.digito}>X</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("4")}>
							<Text style={styles.digito}>4</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("5")}>
							<Text style={styles.digito}>5</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("6")}>
							<Text style={styles.digito}>6</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={() => definirOperador("-")}>
							<Text style={styles.digito}>-</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("1")}>
							<Text style={styles.digito}>1</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("2")}>
							<Text style={styles.digito}>2</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={()=> updateInput("3")}>
							<Text style={styles.digito}>3</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={() => definirOperador("+")}>
							<Text style={styles.digito}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>()</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>0</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>,</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity onPress={() => definirOperador("=")}>
							<Text style={styles.digito}>=</Text>
						</TouchableOpacity>
					</View>
				</View>

			</View>
		</>
	);
	//justifyContent: 'space-between'
}

const styles = StyleSheet.create({

	container: {
		backgroundColor: "#3b3b3c"
	},

	resultado: {
		height: 200
	},

	digito: {
		fontSize: 30,
		color: "white"
	},

	tecla: {

	},

	teclado: {
		flexDirection: "row",
		justifyContent: 'space-between',
		padding: 8,
		alignItems: 'center'
	}
})

