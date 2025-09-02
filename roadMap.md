MediColinas – Design System
===============================

1. Paleta de Cores
-----------------
Primária: Roxo azulado #3D3C6C
Light Mode:
  - Background geral: #F3F4F6 (gray-100)
  - Card: #FFFFFF (white)
  - Texto: #111827 (gray-900)
Dark Mode:
  - Background geral: #111827 (gray-900)
  - Card: #1F2937 (gray-800)
  - Texto: #F9FAFB (gray-50)
Indicadores:
  - Medição feita: Verde #10B981
  - Medição pendente: Vermelho #EF4444

-------------------------------
2. Tipografia
-------------------------------
Fontes:
- Primária: Inter (texto geral, títulos, botões)
- Secundária: Roboto (labels, descrições)
- Especial (opcional): Poppins/Montserrat (headers ou destaque)

Desktop:
H1: Inter, 28px, Bold
H2: Inter, 22px, Semibold
H3: Inter, 18px, Semibold
Texto padrão: Inter, 16px, Regular
Texto secundário: Roboto, 14px, Regular
Botão primário: Inter, 16px, Semibold
Botão secundário: Inter, 14px, Medium

Mobile:
H1: Inter, 22px, Bold
H2: Inter, 18px, Semibold
H3: Inter, 16px, Semibold
Texto padrão: Inter, 14px, Regular
Texto secundário: Roboto, 12px, Regular
Botão primário: Inter, 14px, Semibold
Botão secundário: Inter, 12px, Medium

Tailwind config sugerido:
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      secondary: ['Roboto', 'sans-serif'],
      special: ['Poppins', 'sans-serif'],
    },
  },
}

-------------------------------
3. Ícones e Botões
-------------------------------
Sidebar icons: 20px desktop, 18px mobile
Card icons: 16px
Botões:
  - Altura desktop: 40px
  - Altura mobile: 36px
  - Padding: px-4 desktop, px-3 mobile
  - Border-radius: rounded-md
Espaçamentos:
  - Padding seção: px-6 py-4 desktop, px-4 py-3 mobile
  - Gutter entre cards: gap-4

-------------------------------
4. Wireframes (ASCII)
-------------------------------

Tela Login
----------------
+---------------------------+
|      Logo MediColinas     |
|                           |
|  Matrícula []   |
|  Senha     []   |
|  [Login]                  |
|  Esqueci a senha?         |
+---------------------------+

Dashboard
----------------
Header:
----------------------------------------------------
| Nome Funcionário | Cargo | Complexo | Medição    |
----------------------------------------------------
Filtros:
----------------------------------------
| Mês/Ano | Busca (nome/loja/relogio) |
----------------------------------------
Cards (paginação):
+---------------------------------+
| Loja NS-01 Pão de Açúcar        |
| Nº Loja: NS-01                  |
| Medição anterior: 123456        |
| Medição atual: 123500           |
| Status: ✅ / ❌                 |
| [Informações] [Registrar Medição]|
+---------------------------------+
(repetir por loja)

Modal Registrar Medição
----------------
+-----------------------------+
| Valor atual []        |
| Upload foto [Escolher arquivo] |
| [Confirmar] [Cancelar]      |
+-----------------------------+

Modal Informações Loja
----------------
+-----------------------------+
| Nome loja:                   |
| Nº loja:                     |
| Última medição:              |
| Medição atual:               |
| Funcionário responsável:     |
| Data medição:                |
| Gráfico histórico 6 meses    |
+-----------------------------+

Sidebar / Menu Lateral
----------------
[Logo]
[Dashboard]
[Cadastrar Loja] (ADM / líderes)
[Cadastrar Usuário] (ADM / líderes)
[Relatórios PDF] (superiores)
[Perfil]
[Logout]

Comportamento:
- Expandido: ícone + label
- Colapsado: só ícones
- Acesso condicional:
  Funcionário: Dashboard, Perfil, Logout
  Líder / Supervisor / Coordenador: + Relatórios
  ADM: tudo

-------------------------------
5. Fluxo de Navegação
-------------------------------
Login -> Dashboard
Dashboard -> Modal Informações Loja / Modal Registrar Medição
Dashboard -> Sidebar -> Cadastrar Loja / Usuário / Relatórios / Perfil
Logout -> Login

-------------------------------
6. Comportamento Roles
-------------------------------
Funcionário:
- Visualizar suas lojas
- Registrar medições
- Ver status

Líder / Supervisor / Coordenador:
- Acesso total aos cards
- Editar usuários e lojas
- Exportar relatórios

ADM:
- Acesso total + gerenciamento mestre

-------------------------------
7. Observações
-------------------------------
- Cards paginados
- Indicativo pendente após dia 24, registro até dia 05
- Fotos armazenadas 3 meses, medições permanecem
- Tema light/dark, cor primária roxa
- Toasters para feedback sucesso/erro