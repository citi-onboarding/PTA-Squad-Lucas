import Image from "next/Image"
import { CloseButton } from "@/assets";
import { LeftTopBar } from "@/assets";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function ModalRegistration({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[408px] h-[423px] p-10 !rounded-3xl">
        <DialogHeader className="items-center">
          <DialogTitle className="mb-6">
            <Image src={LeftTopBar} alt="Logo CITi" />
          </DialogTitle>
          <DialogDescription className="text-base text-black mx-10 text-center">
            <span className="font-bold">Cadastro finalizado!</span> Envie o comprovante para o <span className="font-bold">tutor</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid">
            <Label htmlFor="username-1" className="text-base font-bold mb-0">E-mail</Label>
            <Input id="emailTutor" name="emailTutor" placeholder="Digite aqui..." className="px-4 py-6 border-black rounded-lg" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="text-base justify-center bg-[#50E678] w-full h-[42px] rounded-full shadow-md hover:bg-[#50E678] hover:opacity-80 active:opacity-50 transition">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
