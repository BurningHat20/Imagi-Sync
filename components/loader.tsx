<<<<<<< HEAD
import Image from "next/image";
=======
import Image from "next/image"
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
<<<<<<< HEAD
        <Image alt="Logo" src="/logo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">Imagi is Syncing...</p>
=======
        <Image
          alt="Logo"
          src="/logo.png"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Genius is thinking...
      </p>
>>>>>>> 5e81aacae4774429b1c7fbfe47da1455f632acad
    </div>
  );
};
