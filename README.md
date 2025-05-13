# DzBox - Decentralized File Sharing Platform

DzBox is a modern, decentralized file sharing platform that leverages blockchain technology and IPFS for secure, private, and efficient file transfers. Built with Next.js, Go, and Web3 technologies.

![DzBox Preview](preview.png)

## 🌟 Features

- **Decentralized Storage**: Files are distributed across IPFS network
- **End-to-End Encryption**: Multiple encryption options (RSA, AES-256, ChaCha20)
- **Smart Contract Integration**: Metadata stored on blockchain
- **Customizable TTL**: Set expiration times from 1 hour to 3 days
- **Password Protection**: Optional password protection for shared files
- **Modern UI**: Beautiful, responsive interface with smooth animations
- **Short URLs**: Easy-to-share 8-character codes

## 🛠 Tech Stack

### Frontend

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Web3.js

### Backend

- Go (Gin framework)
- PostgreSQL
- Web3.Storage (IPFS)
- Ethereum Smart Contracts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Go 1.21+
- PostgreSQL
- MetaMask or other Web3 wallet
- Web3.Storage account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dzbox.git
cd dzbox
```

2. Install frontend dependencies:

```bash
cd client
npm install
```

3. Install backend dependencies:

```bash
cd ../server
go mod tidy
```

4. Set up environment variables:

Create `.env.local` in the client directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_WEB3_STORAGE_TOKEN=your_web3_storage_token
```

Create `.env` in the server directory:

```env
DATABASE_URL=postgres://username:password@localhost:5432/dzbox
ETH_NODE_URL=your_ethereum_node_url
WEB3_STORAGE_TOKEN=your_web3_storage_token
CONTRACT_ADDRESS=your_contract_address
PRIVATE_KEY=your_private_key
```

5. Start the development servers:

Frontend:

```bash
cd client
npm run dev
```

Backend:

```bash
cd server
go run cmd/server/main.go
```

## 📝 Usage

1. Visit `http://localhost:3000`
2. Click "Upload" to start sharing files
3. Select your file and configure:
   - Time to Live (1 hour to 3 days)
   - Encryption method
   - Optional password protection
4. Upload and share the generated short code

## 🔒 Security

- Files are encrypted before upload
- Smart contracts ensure metadata integrity
- IPFS provides decentralized storage
- Password protection available
- TTL ensures automatic file expiration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Web3.Storage](https://web3.storage/) for IPFS integration
- [Ethereum](https://ethereum.org/) for blockchain infrastructure
- [Next.js](https://nextjs.org/) for the frontend framework
- [Gin](https://gin-gonic.com/) for the backend framework

## 📞 Support

For support, email support@dzbox.xyz or join our Discord community.

---

Built with ❤️ by the DzBox team
