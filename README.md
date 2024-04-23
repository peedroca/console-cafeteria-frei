# console-cafeteria-frei
Programa do tipo console para gestão de cafeteria

![](./Cafeteria.png)

### Cores ANSII

| Código ANSI | Cor do Texto  | Código ANSI | Cor de Fundo |
|-------------|---------------|-------------|--------------|
| `[30m`  | Preto         | `[40m`  | Fundo Preto  |
| `[31m`  | Vermelho      | `[41m`  | Fundo Vermelho |
| `[32m`  | Verde         | `[42m`  | Fundo Verde  |
| `[33m`  | Amarelo       | `[43m`  | Fundo Amarelo |
| `[34m`  | Azul          | `[44m`  | Fundo Azul   |
| `[35m`  | Magenta       | `[45m`  | Fundo Magenta |
| `[36m`  | Ciano         | `[46m`  | Fundo Ciano  |
| `[37m`  | Branco        | `[47m`  | Fundo Branco |

Além dessas cores básicas, existem códigos adicionais para formatos de texto:

- `[1m` - Negrito
- `[4m` - Sublinhado
- `[0m` - Resetar (retorna ao padrão)


#### Exemplo
```js
const CIANO = '\x1b[36m%s\x1b[0m';
```
