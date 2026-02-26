import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	let display = 1250000;

	function calcular() {

	}

	return (
		<>
			<View style = {styles.container}>
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
						<TouchableOpacity>
							<Text style={styles.digito}>/</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>7</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>8</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>9</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>X</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>4</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>5</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>6</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>-</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.teclado}>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>1</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>2</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
							<Text style={styles.digito}>3</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tecla}>
						<TouchableOpacity>
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
						<TouchableOpacity>
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

	container:{
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

