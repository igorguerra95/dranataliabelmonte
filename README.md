# Natalia Belmonte | Neuropsicologia & Psicoterapia Clínica

Landing page institucional de nível premium para a psicóloga e neuropsicóloga **Natalia Belmonte** (CRP 10/06482). Desenvolvida com **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** e **Lucide React**.

---

## 🚀 Como Publicar no GitHub e Ativar o GitHub Pages

Este projeto já está 100% configurado para build e publicação automática no **GitHub Pages** através do **GitHub Actions**.

### Passo 1: Criar o Repositório no GitHub
1. Acesse o [GitHub](https://github.com/new) e crie um novo repositório (público ou privado).
2. Dê um nome ao repositório (por exemplo: `natalia-belmonte-psicologia`).

### Passo 2: Enviar o Código para o GitHub
No terminal da sua máquina, execute os seguintes comandos na pasta do projeto:

```bash
# Inicializar o repositório git (caso ainda não esteja inicializado)
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: landing page completa Natalia Belmonte Neuropsicologa"

# Renomear a branch principal para main
git branch -M main

# Conectar ao seu repositório no GitHub (substitua SEU-USUARIO e REPOSITORIO)
git remote add origin https://github.com/SEU-USUARIO/REPOSITORIO.git

# Enviar os arquivos
git push -u origin main
```

### Passo 3: Ativar o GitHub Pages no Repositório
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages** (sob a seção *Code and automation*).
3. Na seção **Build and deployment**:
   - Em **Source**, selecione: **GitHub Actions**.
4. Pronto! O workflow configurado em `.github/workflows/deploy.yml` será disparado automaticamente e disponibilizará o link do seu site (geralmente `https://SEU-USUARIO.github.io/REPOSITORIO/`).

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** (incluso com o Node.js)

### Passos de Instalação e Execução

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev
```

Abra seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar o site.

### Compilação para Produção

```bash
# Gerar a pasta 'dist' otimizada para publicação
npm run build

# Pré-visualizar a build de produção localmente
npm run preview
```

---

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca moderna para interfaces reativas.
- **Vite 8**: Build tool ultra veloz com suporte nativo a ESM.
- **Tailwind CSS v4**: Estilização com paleta semântica personalizada (Rosa Quartzo `#F472B6` e Dourado Premium `#D4AF37`).
- **Motion (Framer Motion)**: Animações suaves de entrada, transições de cards e micro-interações.
- **Lucide React**: Conjunto de ícones vetoriais finos e consistentes.
- **TypeScript**: Tipagem estática e segurança de código.

---

## 📂 Estrutura de Pastas

```text
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automação de deploy para o GitHub Pages
├── src/
│   ├── components/
│   │   ├── About.tsx             # Seção Sobre a Especialista e credenciais
│   │   ├── AreasOfPractice.tsx   # Especialidades clínicas e filtros
│   │   ├── BookingModal.tsx      # Modal de pré-agendamento interativo
│   │   ├── ContactSection.tsx    # Contato, mapa e formulário
│   │   ├── FAQ.tsx               # Dúvidas frequentes com accordion
│   │   ├── FloatingWhatsApp.tsx  # Botão flutuante do WhatsApp
│   │   ├── Footer.tsx            # Rodapé institucional e aviso ético
│   │   ├── Hero.tsx              # Apresentação principal e métricas
│   │   ├── Methodology.tsx       # Etapas da jornada terapêutica
│   │   ├── ModalitySection.tsx   # Consultório em Belém & Terapia Online
│   │   ├── Navbar.tsx            # Barra de navegação e menu mobile
│   │   └── Testimonials.tsx      # Depoimentos éticos de pacientes
│   ├── data/
│   │   └── clinicalData.ts       # Textos, áreas, FAQs e telefones
│   ├── types.ts                  # Tipagens TypeScript
│   ├── App.tsx                   # Componente raiz da aplicação
│   ├── index.css                 # Estilos globais e tokens semânticos
│   └── main.tsx                  # Ponto de entrada do React
├── index.html                    # SEO, OpenGraph e Schema.org JSON-LD
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração do TypeScript
└── vite.config.ts                # Configuração do Vite com base relativa
```

---

## 📞 Informações de Contato Configuradas

- **Profissional**: Natalia Belmonte (CRP 10/06482)
- **Especialidades**: Neuropsicologia Clínica, Avaliação Cognitiva, TCC, Ansiedade, Depressão e Terapia de Casal
- **Endereço**: Tv. Angustura - Pedreira, Belém - PA, 68447-000
- **Telefone / WhatsApp**: (91) 98264-4888
