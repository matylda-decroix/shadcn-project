import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-8">
        <div className="flex justify-between border-b">
          <Label className="text-base text-center">
            Hello! This is a sandbox with cats!
          </Label>
          <Avatar className="mb-4">
            <AvatarImage src="https://bit.ly/fcc-relaxing-cat" />
            <AvatarFallback>Ginger Cat</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex justify-around mt-10">
          <Image
            src="https://bit.ly/fcc-running-cats"
            alt="Picture of kittens"
            width={400}
            height={400}
          />
          <div className="flex flex-col gap-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Pet the kitties!</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>You pet the kitties!</DialogTitle>
                  <DialogDescription>
                    Now you can name all of them!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name1" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name2" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name3" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <div className="flex flex-col gap-4">
              <Label className="text-base text-center">
                How much do you like cats?
              </Label>
              <div className="w-[300px]">
                <Slider defaultValue={[33]} max={100} step={1} />
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="agree">Yes, those cats are great</Label>
            </div>
            <Textarea
              className="h-[150px]"
              placeholder="Tell me about your pets!"
            />
          </div>
        </div>
      </div>
    </>
  );
}
