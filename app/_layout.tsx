import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  //CHATISSE DE COISA ASSINCRONA QUE NÃO ATUALIZA QUANDO A VARIAVEL MUDA
  //a constante valorAnterior é importante para guardar o valor da primeira parte da operação,
  //evitando desconcatenar o input quando o usuário altera um digito ou define.

  const [operador, setOperador] = useState("");
  const [resultado, setResultado] = useState(0);
  const [input, setInput] = useState("");
  const [valorAnterior, setValorAnterior] = useState<number | null>(null);
  const [finalizado, setFinalizado] = useState(false);

  function parseNumero(valor: string) {
    if (!valor) return null;
    const numero = Number(valor.replace(",", "."));
    return Number.isNaN(numero) ? null : numero;
  }

  function calcularOperacao(n1: number, n2: number, op: string) {
    switch (op) {
      case "+":
        return n1 + n2;
      case "-":
        return n1 - n2;
      case "X":
        return n1 * n2;
      case "/":
        return n2 === 0 ? 0 : n1 / n2;
      default:
        return null;
    }
  }

  function definirOperador(proximoOperador: string) {
    const numeroAtual = parseNumero(input);
    const base = numeroAtual ?? (finalizado ? resultado : null);
    if (base === null) return;

    setValorAnterior(base);
    setOperador(proximoOperador);
    setInput("");
    setFinalizado(false);
  }

  function teclaEspecial(tecla: number) {
    if (tecla === 1) {
      //reinicia todos os constantes e variaveis
      setInput("");
      setValorAnterior(null);
      setOperador("");
      setResultado(0);
      setFinalizado(false);
    } else {
      //apaga só o ultimo digito e calcula de novo o resultado
      setInput((valorAtual) => {
        const novoInput = valorAtual.slice(0, -1);
        const n2 = parseNumero(novoInput);

        if (operador && valorAnterior !== null && n2 !== null) {
          const parcial = calcularOperacao(valorAnterior, n2, operador);
          if (parcial !== null) setResultado(parcial);
        } else if (operador && novoInput === "") {
          setResultado(0);
        }

        return novoInput;
      });
    }
  }

  function updateInput(novo: string) {
    if (finalizado) {
      setInput(novo);
      setFinalizado(false);
      setOperador("");
      setValorAnterior(null);
      setResultado(0);
      return;
    }

    setInput((valorAtual) => {
      const novoInput = valorAtual + novo;
      const n2 = parseNumero(novoInput);

      if (operador && valorAnterior !== null && n2 !== null) {
        const parcial = calcularOperacao(valorAnterior, n2, operador);
        if (parcial !== null) setResultado(parcial);
      }

      return novoInput;
    });
  }

  function calcular(ehFinal: boolean) {
    if (!operador || valorAnterior === null) return;

    const n2 = parseNumero(input);
    if (n2 === null) return;

    const res = calcularOperacao(valorAnterior, n2, operador);
    if (res === null) return;

    setResultado(res);

    if (ehFinal) {
      setFinalizado(true);
      setInput("");
      setOperador("");
      setValorAnterior(null);
    }
  }

  const rascunho =
    operador && valorAnterior !== null
      ? `${valorAnterior} ${operador} ${input}`
      : input;

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.displayMestre}>
            <View style={styles.displayBox}>
              {}
              <Text style={styles.textoInput}>
                {finalizado ? " " : rascunho}
              </Text>
            </View>
            <View style={styles.resultadoBox}>
              <Text style={styles.textoResultado}>{resultado}</Text>
            </View>
          </View>
          <View style={styles.teclado}>
            <View style={styles.linha}>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => teclaEspecial(1)}
                >
                  <Text style={styles.digito}>C</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => teclaEspecial(2)}
                >
                  <Text style={styles.digito}>CE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.digito}>%</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => definirOperador("/")}
                >
                  <Text style={styles.digito}>/</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("7")}
                >
                  <Text style={styles.digito}>7</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("8")}
                >
                  <Text style={styles.digito}>8</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("9")}
                >
                  <Text style={styles.digito}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => definirOperador("X")}
                >
                  <Text style={styles.digito}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("4")}
                >
                  <Text style={styles.digito}>4</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("5")}
                >
                  <Text style={styles.digito}>5</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("6")}
                >
                  <Text style={styles.digito}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => definirOperador("-")}
                >
                  <Text style={styles.digito}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("1")}
                >
                  <Text style={styles.digito}>1</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("2")}
                >
                  <Text style={styles.digito}>2</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("3")}
                >
                  <Text style={styles.digito}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => definirOperador("+")}
                >
                  <Text style={styles.digito}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linha}>
              <View style={styles.tecla}>
                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.digito}>()</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput("0")}
                >
                  <Text style={styles.digito}>0</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => updateInput(",")}
                >
                  <Text style={styles.digito}>,</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.tecla}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => calcular(true)}
                >
                  <Text style={styles.digito}>=</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0c0c0c",
  },
  container: {
    flex: 1,
    backgroundColor: "#0c0c0c",
  },

  displayMestre: {
    flex: 4,
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
    //paddingBottom: "2%",
  },
  displayBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultadoBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 5,
  },
  textoInput: {
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "right",
  },
  textoResultado: {
    fontSize: 30,
    color: "#888888",
    textAlign: "right",
  },

  teclado: {
    flex: 6,
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: "5%",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: "2%",
  },

  tecla: {
    width: "21%",
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: "#3a3939",
    overflow: "hidden",
  },
  botao: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  digito: {
    fontSize: 26,
    color: "#e8c7f0",
    fontWeight: "500",
  },

  teclaOperador: {
    backgroundColor: "#d48b1e",
  },
});
