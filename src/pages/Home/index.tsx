import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"

import { EllipsisVertical, Filter, FuelIcon, Grid, Grid2X2, Image, LayoutGrid, List } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Home() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <div className="p-4 py-6 bg-zinc-50 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex flex-col justify-start space-y-1.5">
                <div className="text-base font-semibold">
                  Image Files
                </div>
                <div className="text-xs text-zinc-400">
                  1768 items
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />

            <div className="mt-4 text-base text-zinc-700">
              20 GB of 120 GB
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex flex-col justify-start space-y-1.5">
                <div className="text-base font-semibold">
                  Image Files
                </div>
                <div className="text-xs text-zinc-400">
                  1768 items
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />

            <div className="mt-4 text-base text-zinc-700">
              20 GB of 120 GB
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex flex-col justify-start space-y-1.5">
                <div className="text-base font-semibold">
                  Image Files
                </div>
                <div className="text-xs text-zinc-400">
                  1768 items
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />

            <div className="mt-4 text-base text-zinc-700">
              20 GB of 120 GB
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 border rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-red-500" />
              </div>
              <div className="flex flex-col justify-start space-y-1.5">
                <div className="text-base font-semibold">
                  Image Files
                </div>
                <div className="text-xs text-zinc-400">
                  1768 items
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />

            <div className="mt-4 text-base text-zinc-700">
              20 GB of 120 GB
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-4">
        <div className="flex justify-between">
          <div>
            <span className="text-lg font-bold text-primary">Overview Storage</span> <br />
            <span className="text-sm text-zinc-500">Document that you save on our storage</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Filter />
              Filter
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <div className="flex items-center text-sm border border-input h-9 py-2 rounded-md overflow-hidden">

              <button className="text-green-500 flex items-center gap-1 hover:bg-accent h-9 px-4 rounded-md">
                <List size={18} />
                <span className="text-sm font-medium">
                  List
                </span>
              </button>
              <Separator orientation="vertical" />
              <button className="text-zinc-500 flex items-center gap-1 hover:bg-accent h-9 px-4 rounded-md">
                <LayoutGrid size={18} />
                <span className="text-sm font-medium">
                  Grid
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-4">
            {
              [0, 1, 2, 3].map(item => {
                return (
                  <Card key={item.toString()} className="p-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 border rounded-lg flex items-center justify-center">
                        <Image className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="flex flex-1 flex-col justify-start space-y-1.5">
                        <div className="text-base font-semibold">
                          Image Files
                        </div>
                        <div className="text-xs text-zinc-400">
                          1768 items
                        </div>
                      </div>
                      <div>
                        <Button variant="link" className="p-0">
                          <EllipsisVertical />
                        </Button>
                      </div>
                    </div>
                  </Card>
                )
              })
            }
          </div>


          <div className="relative overflow-x-auto border border-gray-200 sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="border-b">
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    File Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    Data Upload
                  </th>
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    Last Update
                  </th>
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    File Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    File Owner
                  </th>
                  <th scope="col" className="px-6 py-3 text-zinc-500">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  [0, 1, 2, 3, 4, 5, 6].map(item => {
                    return (
                      <tr key={item.toString()} className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center gap-2">
                            <Checkbox />

                            <div className="h-6 w-6 border border-gray-300 rounded-lg flex justify-center items-center">
                              <Image className="w-3.5 h-3.5" />
                            </div>
                            Valorant.apk
                          </div>
                        </th>
                        <td className="px-6 py-4">
                          10 Sept 2023
                        </td>
                        <td className="px-6 py-4">
                          4 Week ago
                        </td>
                        <td className="px-6 py-4">
                          105.7 MB
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="!w-6 !h-6" >
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className=" text-gray-700 font-medium">
                              Revita Putri
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-gray-600 dark:text-gray-500 hover:underline">
                            <EllipsisVertical />
                          </a>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}