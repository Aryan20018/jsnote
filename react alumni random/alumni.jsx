"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Briefcase, GraduationCap, Mail, Plus } from "lucide-react"
import "leaflet/dist/leaflet.css"

// Initial dummy data for alumni
const initialAlumniData = [
  { id: 1, name: "Alice Johnson", lat: 40.7128, lng: -74.0060, year: 2020, degree: "Computer Science", job: "Software Engineer", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", lat: 34.0522, lng: -118.2437, year: 2019, degree: "Business Administration", job: "Marketing Manager", email: "bob@example.com" },
  { id: 3, name: "Carol Williams", lat: 51.5074, lng: -0.1278, year: 2021, degree: "Mechanical Engineering", job: "Product Designer", email: "carol@example.com" },
]

// Component to update map view when new alumni are added
function MapUpdater({ alumni }) {
  const map = useMap()
  if (alumni.length > 0) {
    map.setView([alumni[alumni.length - 1].lat, alumni[alumni.length - 1].lng], 4)
  }
  return null
}

export default function AlumniMapWithAdd() {
  const [alumniData, setAlumniData] = useState(initialAlumniData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedAlumni, setSelectedAlumni] = useState(null)
  const [newAlumni, setNewAlumni] = useState({
    name: "",
    lat: "",
    lng: "",
    year: "",
    degree: "",
    job: "",
    email: "",
  })

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.job.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddAlumni = (e) => {
    e.preventDefault()
    const id = alumniData.length + 1
    const newAlumniWithId = { ...newAlumni, id, lat: parseFloat(newAlumni.lat), lng: parseFloat(newAlumni.lng) }
    setAlumniData([...alumniData, newAlumniWithId])
    setNewAlumni({ name: "", lat: "", lng: "", year: "", degree: "", job: "", email: "" })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alumni Map</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Interactive Alumni Map</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "600px", width: "100%" }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredAlumni.map((alumni) => (
                <Marker
                  key={alumni.id}
                  position={[alumni.lat, alumni.lng]}
                  eventHandlers={{
                    click: () => setSelectedAlumni(alumni),
                  }}
                >
                  <Popup>
                    <div className="text-center">
                      <Avatar className="mx-auto mb-2">
                        <AvatarFallback>{alumni.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold">{alumni.name}</h3>
                      <p className="text-sm text-gray-500">{alumni.degree}, {alumni.year}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <MapUpdater alumni={alumniData} />
            </MapContainer>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Search Alumni</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  placeholder="Search by name, degree, or job"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Add New Alumni</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddAlumni} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newAlumni.name}
                    onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="lat">Latitude</Label>
                    <Input
                      id="lat"
                      type="number"
                      step="any"
                      value={newAlumni.lat}
                      onChange={(e) => setNewAlumni({ ...newAlumni, lat: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lng">Longitude</Label>
                    <Input
                      id="lng"
                      type="number"
                      step="any"
                      value={newAlumni.lng}
                      onChange={(e) => setNewAlumni({ ...newAlumni, lng: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Graduation Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={newAlumni.year}
                    onChange={(e) => setNewAlumni({ ...newAlumni, year: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="degree">Degree</Label>
                  <Input
                    id="degree"
                    value={newAlumni.degree}
                    onChange={(e) => setNewAlumni({ ...newAlumni, degree: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job">Job</Label>
                  <Input
                    id="job"
                    value={newAlumni.job}
                    onChange={(e) => setNewAlumni({ ...newAlumni, job: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newAlumni.email}
                    onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Alumni
                </Button>
              </form>
            </CardContent>
          </Card>
          {selectedAlumni && (
            <Card>
              
              <CardHeader>
                <CardTitle>Alumni Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">{selectedAlumni.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{selectedAlumni.name}</h3>
                    <p className="text-sm text-gray-500">{selectedAlumni.degree}, {selectedAlumni.year}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span>{selectedAlumni.job}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4 text-gray-500" />
                    <span>{selectedAlumni.degree}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <a href={`mailto:${selectedAlumni.email}`} className="text-blue-500 hover:underline">{selectedAlumni.email}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span>Lat: {selectedAlumni.lat.toFixed(2)}, Lng: {selectedAlumni.lng.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardHeader>
              <CardTitle>Alumni List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredAlumni.map((alumni) => (
                  <div key={alumni.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{alumni.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{alumni.name}</p>
                      <p className="text-sm text-gray-500">{alumni.degree}, {alumni.year}</p>
                    </div>
                    <Badge variant="outline" className="ml-auto">
                      {alumni.job}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}