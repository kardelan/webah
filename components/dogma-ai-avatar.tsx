export function DogmaAIAvatar() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mt-8 md:mt-0 flex items-center justify-center">
      <img
        src="/images/dogagent-ai-avatar.png" // Memastikan jalur gambar yang benar
        alt="DogAgent AI Digital Cyberpunk Dog Avatar"
        width={320}
        height={320}
        className="object-contain filter drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]"
      />
      {/* Elemen glowing eye telah dihapus */}
    </div>
  )
}
