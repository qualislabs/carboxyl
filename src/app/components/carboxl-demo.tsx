"use client"

import { useState } from "react"
import {
    Leaf,
    Smartphone,
    Satellite,
    DollarSign,
    Users,
    MapPin,
    Zap,
    CheckCircle,
    BarChart3,
    Globe,
    Shield,
    TreePine,
    Award,
    Camera,
    Wifi,
    Lock,
    UserCheck,
    CreditCard,
    FileText,
    Droplets,
    Sun,
    Wind,
    Vote,
    TrendingUp,
    Bot,
    Coins,
    Rocket,
    AlertTriangle,
    Brain,
    Network,
    Target,
    Cloud,
    Expand,
    Filter,
    Plus,
    AlertCircle as AlertTitle,
    Clock,
    Scissors,
    Upload,
    Info,
    GraduationCap,
    Gift,
    Wallet,
    Download,
    Trophy,
    AlertCircle,
    ShoppingCart,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const CarboxylDemo = () => {
    const [activeTab, setActiveTab] = useState("dashboard")
    const [carbonData, setCarbonData] = useState(1247)
    const [payments, setPayments] = useState(45230)
    const [farmers, setFarmers] = useState(156)

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCarbonData((prev) => prev + Math.floor(Math.random() * 3))
    //     setPayments((prev) => prev + Math.floor(Math.random() * 50))
    //   }, 3000)
    //   return () => clearInterval(interval)
    // }, [])

    const DashboardView = () => (
        <div className="space-y-8">
            <Alert className="border-green-200 bg-green-50">
                <Zap className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                    Real-time data from IoT sensors and satellite monitoring
                </AlertDescription>
            </Alert>

            <Card className="bg-white border border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Satellite className="h-5 w-5 mr-2 text-green-600" />
                        Interactive Satellite Forest Monitoring
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Advanced Filters Panel */}
                        <div className="lg:col-span-1 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                    <Filter className="h-4 w-4 mr-2" />
                                    Interactive Filters
                                </h4>

                                <div className="space-y-3">
                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Tree Age Range</Label>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-gray-500">0y</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                                                <div className="absolute left-1/4 w-1/2 h-full bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-xs text-gray-500">15y</span>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-1">3-8 years selected</p>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Tree Species</Label>
                                        <Select>
                                            <SelectTrigger className="mt-1 h-8 text-xs">
                                                <SelectValue placeholder="All Species" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Species (2,847)</SelectItem>
                                                <SelectItem value="acacia">Acacia (1,281)</SelectItem>
                                                <SelectItem value="eucalyptus">Eucalyptus (854)</SelectItem>
                                                <SelectItem value="baobab">Baobab (427)</SelectItem>
                                                <SelectItem value="mango">Mango (285)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Health Status</Label>
                                        <div className="grid grid-cols-2 gap-1 mt-1">
                                            <Button variant="outline" size="sm" className="h-7 text-xs bg-green-50 border-green-200">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                                Healthy
                                            </Button>
                                            <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                                                At Risk
                                            </Button>
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Carbon Sequestration</Label>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-gray-500">Low</span>
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                                                <div className="absolute left-1/3 w-1/3 h-full bg-blue-500 rounded-full"></div>
                                            </div>
                                            <span className="text-xs text-gray-500">High</span>
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Ownership</Label>
                                        <Select>
                                            <SelectTrigger className="mt-1 h-8 text-xs">
                                                <SelectValue placeholder="All Farmers" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All Farmers (156)</SelectItem>
                                                <SelectItem value="verified">Verified Only (134)</SelectItem>
                                                <SelectItem value="cooperative">Cooperative Members (89)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-medium text-gray-600">Location Boundary</Label>
                                        <Select>
                                            <SelectTrigger className="mt-1 h-8 text-xs">
                                                <SelectValue placeholder="Kenya - Nakuru" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="kenya-nakuru">Kenya - Nakuru County</SelectItem>
                                                <SelectItem value="kenya-kiambu">Kenya - Kiambu County</SelectItem>
                                                <SelectItem value="uganda-kampala">Uganda - Kampala</SelectItem>
                                                <SelectItem value="tanzania-arusha">Tanzania - Arusha</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Toggle Layers */}
                                <div className="mt-4 pt-3 border-t border-gray-200">
                                    <h5 className="text-xs font-medium text-gray-600 mb-2">Map Layers</h5>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-600">Time-lapse Imagery</span>
                                            <div className="w-8 h-4 bg-green-500 rounded-full relative">
                                                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-600">IoT Sensor Overlay</span>
                                            <div className="w-8 h-4 bg-blue-500 rounded-full relative">
                                                <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-600">Deforestation Alerts</span>
                                            <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                                                <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Satellite Map */}
                        <div className="lg:col-span-3 space-y-4">
                            <div className="relative h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden border-2 border-gray-200">
                                <div className="w-full h-full relative bg-green-50">
                                    {/* Map Base Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-200 via-green-100 to-yellow-50">
                                        {/* Terrain Features */}
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            {/* Rivers */}
                                            <div className="absolute top-1/4 left-0 w-full h-1 bg-blue-300 opacity-60 transform rotate-12"></div>
                                            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-blue-300 opacity-40 transform -rotate-6"></div>

                                            {/* Roads */}
                                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 opacity-70"></div>
                                            <div className="absolute top-0 left-1/3 w-0.5 h-full bg-gray-400 opacity-50"></div>

                                            {/* Forest Areas */}
                                            <div className="absolute top-1/6 left-1/4 w-32 h-24 bg-green-300 opacity-60 rounded-full"></div>
                                            <div className="absolute top-1/2 left-1/2 w-40 h-32 bg-green-400 opacity-70 rounded-full"></div>
                                            <div className="absolute bottom-1/4 right-1/4 w-28 h-20 bg-green-300 opacity-60 rounded-full"></div>

                                            {/* Agricultural Fields */}
                                            <div className="absolute top-1/3 right-1/6 w-24 h-16 bg-yellow-200 opacity-80 transform rotate-45"></div>
                                            <div className="absolute bottom-1/3 left-1/6 w-20 h-12 bg-yellow-100 opacity-70 transform -rotate-12"></div>
                                        </div>
                                    </div>

                                    {/* Interactive Tree Markers */}
                                    <div
                                        className="absolute top-1/3 left-1/3 w-4 h-4 bg-green-500 rounded-full border-2 border-white cursor-pointer animate-pulse shadow-lg hover:scale-125 transition-transform"
                                        onClick={() => console.log("[v0] Tree cluster A247 clicked")}
                                        title="Tree Cluster A247 - 47 Acacia trees, 4.2 tons CO₂"
                                    ></div>
                                    <div
                                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white cursor-pointer shadow-lg hover:scale-125 transition-transform"
                                        onClick={() => console.log("[v0] Tree cluster B156 clicked")}
                                        title="Tree Cluster B156 - 32 Eucalyptus trees, 3.8 tons CO₂"
                                    ></div>
                                    <div
                                        className="absolute top-2/3 left-2/3 w-4 h-4 bg-yellow-500 rounded-full border-2 border-white cursor-pointer shadow-lg hover:scale-125 transition-transform"
                                        onClick={() => console.log("[v0] At-risk cluster C089 clicked")}
                                        title="Tree Cluster C089 - 18 Baobab trees, At Risk"
                                    ></div>
                                    <div
                                        className="absolute top-1/4 right-1/3 w-4 h-4 bg-blue-500 rounded-full border-2 border-white cursor-pointer shadow-lg hover:scale-125 transition-transform"
                                        onClick={() => console.log("[v0] High carbon cluster D234 clicked")}
                                        title="Tree Cluster D234 - 65 Mango trees, 6.1 tons CO₂"
                                    ></div>
                                    <div
                                        className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-green-600 rounded-full border-2 border-white cursor-pointer shadow-lg hover:scale-125 transition-transform"
                                        onClick={() => console.log("[v0] Mature cluster E178 clicked")}
                                        title="Tree Cluster E178 - 28 Acacia trees, 5.3 tons CO₂"
                                    ></div>

                                    {/* IoT Sensor Markers */}
                                    <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-blue-400 rounded-full border border-white shadow-sm"></div>
                                    <div className="absolute top-3/5 right-1/3 w-2 h-2 bg-blue-400 rounded-full border border-white shadow-sm"></div>
                                    <div className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-blue-400 rounded-full border border-white shadow-sm"></div>

                                    {/* Deforestation Alert */}
                                    <div className="absolute top-1/6 right-1/4 w-3 h-3 bg-red-500 rounded-full border border-white animate-ping"></div>
                                </div>

                                {/* Map Controls */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 space-y-1 shadow-lg">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-8 h-8 p-0 bg-white hover:bg-gray-50"
                                        onClick={() => console.log("[v0] Zoom in clicked")}
                                    >
                                        +
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-8 h-8 p-0 bg-white hover:bg-gray-50"
                                        onClick={() => console.log("[v0] Zoom out clicked")}
                                    >
                                        -
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-8 h-8 p-0 bg-white hover:bg-gray-50"
                                        onClick={() => console.log("[v0] Reset view clicked")}
                                    >
                                        ⌂
                                    </Button>
                                </div>

                                {/* Sample Interactive Tooltip */}
                                <div className="absolute top-1/4 left-1/4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border max-w-xs">
                                    <div className="flex items-center justify-between mb-2">
                                        <h5 className="font-semibold text-sm text-gray-800">Tree Cluster #A247</h5>
                                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                                            Healthy
                                        </Badge>
                                    </div>
                                    <div className="space-y-1 text-xs text-gray-600">
                                        <p>
                                            <span className="font-medium">Species:</span> Acacia Senegal
                                        </p>
                                        <p>
                                            <span className="font-medium">Planted:</span> March 2021 (2.8 years)
                                        </p>
                                        <p>
                                            <span className="font-medium">Carbon Captured:</span> 4.2 tons CO₂
                                        </p>
                                        <p>
                                            <span className="font-medium">Farmer:</span> Sarah Wanjiku
                                        </p>
                                        <p>
                                            <span className="font-medium">Location:</span> -0.3031°, 36.0800°
                                        </p>
                                    </div>
                                    <Button
                                        size="sm"
                                        className="w-full mt-2 h-7 text-xs"
                                        onClick={() => console.log("[v0] View details clicked for cluster A247")}
                                    >
                                        View Details
                                    </Button>
                                </div>

                                {/* Legend */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                    <h5 className="text-xs font-semibold text-gray-800 mb-2">Map Legend</h5>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-xs text-gray-600">Healthy Trees</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <span className="text-xs text-gray-600">At Risk</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <span className="text-xs text-gray-600">Cut Down</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <span className="text-xs text-gray-600">High Carbon Capture</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Real-time Metrics */}
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-green-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-gray-600">Forest Coverage</p>
                                    <p className="text-lg font-bold text-green-600">94.2%</p>
                                    <p className="text-xs text-green-500">↑ 2.1% this month</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-gray-600">Tree Density</p>
                                    <p className="text-lg font-bold text-blue-600">847/ha</p>
                                    <p className="text-xs text-blue-500">Optimal range</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-gray-600">CO₂ Sequestration</p>
                                    <p className="text-lg font-bold text-purple-600">12.4t/ha/yr</p>
                                    <p className="text-xs text-purple-500">Above average</p>
                                </div>
                                <div className="bg-red-50 p-3 rounded-lg text-center">
                                    <p className="text-xs text-gray-600">Risk Level</p>
                                    <p className="text-lg font-bold text-red-600">Low</p>
                                    <p className="text-xs text-red-500">3 alerts resolved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Carbon Sequestered</p>
                                <p className="text-3xl font-bold text-green-600">{carbonData.toLocaleString()}</p>
                                <p className="text-gray-500 text-xs">tonnes CO₂</p>
                            </div>
                            <TreePine className="h-8 w-8 text-green-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Payments Distributed</p>
                                <p className="text-3xl font-bold text-blue-600">${payments.toLocaleString()}</p>
                                <p className="text-gray-500 text-xs">to farmers</p>
                            </div>
                            <DollarSign className="h-8 w-8 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Active Farmers</p>
                                <p className="text-3xl font-bold text-purple-600">{farmers}</p>
                                <p className="text-gray-500 text-xs">verified participants</p>
                                <div className="mt-2 pt-2 border-t border-gray-100">
                                    <p className="text-xs text-gray-600">Demographics:</p>
                                    <p className="text-xs text-purple-600 font-medium">68% Women Farmers</p>
                                </div>
                            </div>
                            <Users className="h-8 w-8 text-purple-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Land Monitored</p>
                                <p className="text-3xl font-bold text-orange-600">2,847</p>
                                <p className="text-gray-500 text-xs">hectares</p>
                            </div>
                            <MapPin className="h-8 w-8 text-orange-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                            Business & Policy Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Regional Carbon Trends</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">East Africa</span>
                                    <span className="text-sm font-bold text-green-600">+15.2% growth</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">West Africa</span>
                                    <span className="text-sm font-bold text-green-600">+8.7% growth</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Central Africa</span>
                                    <span className="text-sm font-bold text-yellow-600">+2.1% growth</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-800 mb-2">ROI & Funding Impact</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Corporate Sponsorship</span>
                                    <span className="text-sm font-bold text-green-600">$2.4M invested</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Carbon Offset Value</span>
                                    <span className="text-sm font-bold text-blue-600">$3.8M generated</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">ROI Ratio</span>
                                    <span className="text-sm font-bold text-purple-600">158%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <ShoppingCart className="h-5 w-5 mr-2 text-green-600" />
                            Carbon Credit Marketplace
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">Live Credit Issuance</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Credits Available</span>
                                    <span className="text-sm font-bold text-green-600">1,247 tons CO₂</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Current Price</span>
                                    <span className="text-sm font-bold text-blue-600">$45.20/ton</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">24h Change</span>
                                    <span className="text-sm font-bold text-green-600">+2.8%</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-800 mb-2">Buyer Dashboard</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Corporate Buyers</span>
                                    <span className="text-sm font-bold text-purple-600">23 active</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">NGO Purchases</span>
                                    <span className="text-sm font-bold text-blue-600">456 tons</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Government Orders</span>
                                    <span className="text-sm font-bold text-green-600">789 tons</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-white border border-gray-200">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                        Fallback & Accountability System
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-red-800 mb-3">Tree Cut-Down Alerts</h4>
                            <div className="space-y-3">
                                <Alert className="border-red-200 bg-red-50">
                                    <AlertTriangle className="h-4 w-4 text-red-600" />
                                    <AlertDescription className="text-red-800 text-sm">
                                        <strong>John Mwangi:</strong> 12 trees removed - Credits withdrawn
                                    </AlertDescription>
                                </Alert>
                                <div className="text-xs text-gray-600">
                                    <p>• Automatic satellite detection</p>
                                    <p>• Farmer notification sent</p>
                                    <p>• Credits reallocated</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-yellow-800 mb-3">Penalty/Reward System</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Penalties Issued</span>
                                    <span className="text-sm font-bold text-red-600">3 this month</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Long-term Rewards</span>
                                    <span className="text-sm font-bold text-green-600">$12,450</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Compliance Rate</span>
                                    <span className="text-sm font-bold text-blue-600">94.2%</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3">Credit Reallocation</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Credits Reallocated</span>
                                    <span className="text-sm font-bold text-blue-600">234 tons</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Replacement Trees</span>
                                    <span className="text-sm font-bold text-green-600">1,456 planted</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-600">Recovery Rate</span>
                                    <span className="text-sm font-bold text-purple-600">87%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardHeader>
                        <CardTitle className="text-gray-800">Revenue Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Farmers</span>
                                </div>
                                <span className="text-lg font-bold text-green-600">90%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-green-500 h-3 rounded-full" style={{ width: "90%" }}></div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Platform Fees</span>
                                </div>
                                <span className="text-lg font-bold text-blue-600">10%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: "10%" }}></div>
                            </div>

                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                                <p className="text-xs text-gray-600">Total Revenue This Month</p>
                                <p className="text-xl font-bold text-gray-800">${(payments * 1.11).toLocaleString()}</p>
                                <p className="text-xs text-gray-500">
                                    Farmers: ${payments.toLocaleString()} | Platform: ${Math.round(payments * 0.11).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                            Recent Transactions
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Farmer</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="flex items-center space-x-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>JM</AvatarFallback>
                                        </Avatar>
                                        <span>John Mwangi</span>
                                    </TableCell>
                                    <TableCell>$245</TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-800">
                                            Completed
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex items-center space-x-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>AK</AvatarFallback>
                                        </Avatar>
                                        <span>Amina Kone</span>
                                    </TableCell>
                                    <TableCell>$189</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Processing</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="flex items-center space-x-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback>SK</AvatarFallback>
                                        </Avatar>
                                        <span>Samuel Kiprop</span>
                                    </TableCell>
                                    <TableCell>$312</TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-800">
                                            Completed
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Satellite className="h-5 w-5 mr-2 text-blue-600" />
                            IoT Monitoring
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Droplets className="h-4 w-4 text-blue-500" />
                                <span className="text-sm">Soil Moisture</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Progress value={78} className="w-20" />
                                <span className="text-sm font-medium">78%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Sun className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm">Temperature</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Progress value={65} className="w-20" />
                                <span className="text-sm font-medium">24°C</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Wind className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">Air Quality</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Progress value={92} className="w-20" />
                                <span className="text-sm font-medium">Good</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    const FarmerView = () => {
        const [activeStep, setActiveStep] = useState(1)
        const [selectedParcel, setSelectedParcel] = useState("")
        const [treeData, setTreeData] = useState({
            species: "",
            plantingDate: "",
            expectedUse: "",
            photos: [] as string[],
        })

        const parcels = [
            { id: "P001", name: "North Field", size: "5.2 ha", gps: "0.3476°S, 36.0623°E" },
            { id: "P002", name: "Coffee Grove", size: "4.1 ha", gps: "0.3481°S, 36.0618°E" },
            { id: "P003", name: "Agroforestry Plot", size: "3.2 ha", gps: "0.3469°S, 36.0631°E" },
        ]

        const treeSpecies = [
            "Grevillea robusta (Silky Oak)",
            "Eucalyptus saligna (Sydney Blue Gum)",
            "Croton megalocarpus (Mukinduri)",
            "Cordia africana (Mukumari)",
            "Markhamia lutea (Siala)",
        ]

        return (
            <div className="space-y-8">
                {/* Farmer Profile Header */}
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="/african-farmer-portrait.png" />
                        <AvatarFallback className="text-lg">JM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">Joan Mwangi</h2>
                        <p className="text-sm text-muted-foreground">Farmer ID: KE-001-2024</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="default" className="bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified
                            </Badge>
                            <Badge variant="secondary">
                                <MapPin className="h-3 w-3 mr-1" />
                                Nakuru, Kenya
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Tree Reporting Flow */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <TreePine className="h-5 w-5 mr-2" />
                            Tree Reporting & Tracking System
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Complete tree lifecycle management from planting to carbon credit generation
                        </p>
                    </CardHeader>
                    <CardContent>
                        <Tabs value={`step-${activeStep}`} className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="step-1" onClick={() => setActiveStep(1)}>
                                    Step 1: Tree Onboarding
                                </TabsTrigger>
                                <TabsTrigger value="step-2" onClick={() => setActiveStep(2)}>
                                    Step 2: Growth Tracking
                                </TabsTrigger>
                                <TabsTrigger value="step-3" onClick={() => setActiveStep(3)}>
                                    Step 3: Accountability
                                </TabsTrigger>
                            </TabsList>

                            {/* Step 1: Tree Onboarding */}
                            <TabsContent value="step-1" className="space-y-6 mt-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Select Parcel</CardTitle>
                                            <p className="text-sm text-muted-foreground">Choose a registered parcel with GPS boundaries</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <Select value={selectedParcel} onValueChange={setSelectedParcel}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a parcel" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {parcels.map((parcel) => (
                                                        <SelectItem key={parcel.id} value={parcel.id}>
                                                            {parcel.name} - {parcel.size}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {selectedParcel && (
                                                <div className="p-3 bg-green-50 rounded-lg">
                                                    <div className="text-sm font-medium">Selected Parcel Details</div>
                                                    <div className="text-xs text-muted-foreground mt-1">
                                                        GPS: {parcels.find((p) => p.id === selectedParcel)?.gps}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Tree Data Capture</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div>
                                                <Label htmlFor="species">Tree Species</Label>
                                                <Select
                                                    value={treeData.species}
                                                    onValueChange={(value) => setTreeData((prev) => ({ ...prev, species: value }))}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select species" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {treeSpecies.map((species) => (
                                                            <SelectItem key={species} value={species}>
                                                                {species}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label htmlFor="planting-date">Planting Date</Label>
                                                <Input
                                                    id="planting-date"
                                                    type="date"
                                                    value={treeData.plantingDate}
                                                    onChange={(e) => setTreeData((prev) => ({ ...prev, plantingDate: e.target.value }))}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="expected-use">Expected Use</Label>
                                                <Select
                                                    value={treeData.expectedUse}
                                                    onValueChange={(value) => setTreeData((prev) => ({ ...prev, expectedUse: value }))}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select use" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="shade">Shade</SelectItem>
                                                        <SelectItem value="fruit">Fruit Production</SelectItem>
                                                        <SelectItem value="timber">Timber</SelectItem>
                                                        <SelectItem value="agroforestry">Agroforestry</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Evidence Collection</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <Label>Geo-tagged Photos</Label>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                                    <Camera className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                                    <p className="text-sm text-gray-500">Take multiple angle photos</p>
                                                    <Button variant="outline" className="mt-2 bg-transparent">
                                                        <Camera className="h-4 w-4 mr-2" />
                                                        Capture Photos
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <Label>AI Verification Status</Label>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                                        <span className="text-sm">GPS Verification</span>
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                                        <span className="text-sm">Photo Metadata</span>
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                                                        <span className="text-sm">Sapling Recognition</span>
                                                        <Clock className="h-4 w-4 text-yellow-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Alert>
                                            <Smartphone className="h-4 w-4" />
                                            <AlertTitle>Offline Capability</AlertTitle>
                                            <AlertDescription>
                                                Data is saved locally and will sync when internet connection is available.
                                            </AlertDescription>
                                        </Alert>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Step 2: Growth Tracking */}
                            <TabsContent value="step-2" className="space-y-6 mt-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Periodic Updates</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between p-3 border rounded-lg">
                                                    <div>
                                                        <div className="font-medium">Quarterly Photo Update</div>
                                                        <div className="text-sm text-muted-foreground">Due: Jan 15, 2025</div>
                                                    </div>
                                                    <Button size="sm">
                                                        <Camera className="h-4 w-4 mr-2" />
                                                        Update
                                                    </Button>
                                                </div>
                                                <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                                                    <div>
                                                        <div className="font-medium">Growth Measurement</div>
                                                        <div className="text-sm text-muted-foreground">Completed: Dec 15, 2024</div>
                                                    </div>
                                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                                </div>
                                            </div>
                                            <Separator />
                                            <div className="space-y-2">
                                                <Label>Growth Streak</Label>
                                                <div className="flex items-center space-x-2">
                                                    <Badge variant="default" className="bg-yellow-100 text-yellow-800">
                                                        🏆 Tree Guardian - 8 months
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Carbon Dashboard</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="text-center p-3 bg-green-50 rounded-lg">
                                                    <div className="text-2xl font-bold text-green-600">94%</div>
                                                    <div className="text-sm text-muted-foreground">Trees Alive</div>
                                                </div>
                                                <div className="text-center p-3 bg-blue-50 rounded-lg">
                                                    <div className="text-2xl font-bold text-blue-600">127.3</div>
                                                    <div className="text-sm text-muted-foreground">kg CO₂e</div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Lifetime Earnings Potential</span>
                                                    <span className="font-medium">$3,240</span>
                                                </div>
                                                <Progress value={65} className="h-2" />
                                                <div className="text-xs text-muted-foreground">65% of projected maturity</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Satellite & IoT Validation</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <Satellite className="h-4 w-4 text-blue-500" />
                                                    <span className="font-medium">Satellite Analysis</span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">Canopy growth: +15% this quarter</div>
                                                <div className="text-sm text-muted-foreground">Biomass estimate: 2.3 tons</div>
                                            </div>
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <Wifi className="h-4 w-4 text-green-500" />
                                                    <span className="font-medium">IoT Sensors</span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">Soil moisture: Optimal</div>
                                                <div className="text-sm text-muted-foreground">Survival rate: 94%</div>
                                            </div>
                                            <div className="p-4 border rounded-lg">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <Coins className="h-4 w-4 text-yellow-500" />
                                                    <span className="font-medium">Smart Contracts</span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">Credits minted: 12.7 tCO₂e</div>
                                                <div className="text-sm text-muted-foreground">Next minting: Feb 1, 2025</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Step 3: Accountability */}
                            <TabsContent value="step-3" className="space-y-6 mt-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Tree Loss Reporting</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <Alert>
                                                <AlertTriangle className="h-4 w-4" />
                                                <AlertTitle>Self-Report Incentive</AlertTitle>
                                                <AlertDescription>
                                                    Voluntary reporting of tree loss results in reduced penalties and maintains farmer reputation.
                                                </AlertDescription>
                                            </Alert>
                                            <div className="space-y-3">
                                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                                    <FileText className="h-4 w-4 mr-2" />
                                                    Report Tree Death (Natural)
                                                </Button>
                                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                                    <Scissors className="h-4 w-4 mr-2" />
                                                    Report Tree Removal (Planned)
                                                </Button>
                                                <Button variant="outline" className="w-full justify-start bg-transparent">
                                                    <Camera className="h-4 w-4 mr-2" />
                                                    Upload Evidence Photos
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Buffer Pool Protection</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="p-4 bg-blue-50 rounded-lg">
                                                <div className="font-medium mb-2">Credit Insurance System</div>
                                                <div className="text-sm text-muted-foreground mb-3">
                                                    15% of all credits are held in a buffer pool to protect buyers from invalid credits.
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span>Buffer Pool Contribution</span>
                                                        <span>13.4 tCO₂e</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm">
                                                        <span>Available for Sale</span>
                                                        <span>75.9 tCO₂e</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Replanting Credits Available</Label>
                                                <div className="p-2 border rounded text-sm">
                                                    Fast-track credit recovery for replacement trees: 2x normal rate for first year
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Fraud Detection & Community Verification</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="font-medium">Automated Monitoring</div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                                        <span className="text-sm">Satellite Cross-Check</span>
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                                        <span className="text-sm">IoT Sensor Validation</span>
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                                                        <span className="text-sm">Photo Metadata Analysis</span>
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="font-medium">Community Verification</div>
                                                <div className="space-y-2">
                                                    <div className="p-3 border rounded-lg">
                                                        <div className="text-sm font-medium">Peer Witnesses</div>
                                                        <div className="text-xs text-muted-foreground">3 neighbor confirmations</div>
                                                    </div>
                                                    <div className="p-3 border rounded-lg">
                                                        <div className="text-sm font-medium">Co-op Validation</div>
                                                        <div className="text-xs text-muted-foreground">Monthly field visits</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator className="my-4" />

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <div className="font-medium mb-2">Reputation Score: 4.8/5.0</div>
                                            <div className="text-sm text-muted-foreground">
                                                Based on reporting accuracy, community feedback, and verification success rate.
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Existing farmer information cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Land Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="land-size">Land Size</Label>
                                        <Input id="land-size" value="12.5 hectares" readOnly />
                                    </div>
                                    <div>
                                        <Label htmlFor="crop-type">Primary Crop</Label>
                                        <Select defaultValue="coffee">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="coffee">Coffee</SelectItem>
                                                <SelectItem value="tea">Tea</SelectItem>
                                                <SelectItem value="maize">Maize</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Trees Planted</span>
                                        <span className="font-medium">1,247 trees</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Carbon Credits Earned</span>
                                        <span className="font-medium">89.3 tCO₂</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Total Earnings</span>
                                        <span className="font-medium text-green-600">$2,847</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Payment History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead>Amount</TableHead>
                                            <TableHead>Credits</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Dec 15, 2024</TableCell>
                                            <TableCell>$245</TableCell>
                                            <TableCell>12.3 tCO₂</TableCell>
                                            <TableCell>
                                                <Badge variant="default" className="bg-green-100 text-green-800">
                                                    Paid
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Nov 15, 2024</TableCell>
                                            <TableCell>$189</TableCell>
                                            <TableCell>9.5 tCO₂</TableCell>
                                            <TableCell>
                                                <Badge variant="default" className="bg-green-100 text-green-800">
                                                    Paid
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Oct 15, 2024</TableCell>
                                            <TableCell>$312</TableCell>
                                            <TableCell>15.6 tCO₂</TableCell>
                                            <TableCell>
                                                <Badge variant="default" className="bg-green-100 text-green-800">
                                                    Paid
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <Camera className="h-4 w-4 mr-2" />
                                    Upload Tree Photos
                                </Button>
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <FileText className="h-4 w-4 mr-2" />
                                    View Contracts
                                </Button>
                                <Button className="w-full justify-start bg-transparent" variant="outline">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    Payment Settings
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">IoT Device Status</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Wifi className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Soil Sensor</span>
                                    </div>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Camera className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">Tree Camera</span>
                                    </div>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Satellite className="h-4 w-4 text-yellow-500" />
                                        <span className="text-sm">GPS Tracker</span>
                                    </div>
                                    <Badge variant="secondary">Syncing</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

    const TechView = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Technical Architecture</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Carboxyl leverages cutting-edge technology to ensure transparency, accuracy, and equitable distribution of
                    climate finance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardHeader>
                        <CardTitle className="flex items-center text-blue-800">
                            <Satellite className="h-5 w-5 mr-2" />
                            Satellite Monitoring
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-blue-700">
                            Real-time forest monitoring using satellite imagery and AI analysis.
                        </p>
                        <div className="space-y-2">
                            <Badge variant="secondary">Sentinel-2 Data</Badge>
                            <Badge variant="secondary">NDVI Analysis</Badge>
                            <Badge variant="secondary">Change Detection</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-green-50">
                    <CardHeader>
                        <CardTitle className="flex items-center text-green-800">
                            <Shield className="h-5 w-5 mr-2" />
                            Blockchain Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-green-700">
                            Immutable records and smart contracts for transparent transactions.
                        </p>
                        <div className="space-y-2">
                            <Badge variant="secondary">Ethereum</Badge>
                            <Badge variant="secondary">Smart Contracts</Badge>
                            <Badge variant="secondary">IPFS Storage</Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-2 border-purple-200 bg-purple-50">
                    <CardHeader>
                        <CardTitle className="flex items-center text-purple-800">
                            <Smartphone className="h-5 w-5 mr-2" />
                            Mobile Integration
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-purple-700">User-friendly mobile app for farmers with offline capabilities.</p>
                        <div className="space-y-2">
                            <Badge variant="secondary">React Native</Badge>
                            <Badge variant="secondary">Offline Sync</Badge>
                            <Badge variant="secondary">Multi-language</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Separator />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Data Flow Architecture</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    1
                                </div>
                                <div>
                                    <p className="font-medium">IoT Data Collection</p>
                                    <p className="text-sm text-muted-foreground">Sensors collect environmental data</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    2
                                </div>
                                <div>
                                    <p className="font-medium">Satellite Verification</p>
                                    <p className="text-sm text-muted-foreground">AI validates tree growth and health</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    3
                                </div>
                                <div>
                                    <p className="font-medium">Smart Contract Execution</p>
                                    <p className="text-sm text-muted-foreground">Automated payments based on verified data</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Security & Compliance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <Lock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                                <p className="font-medium">End-to-End Encryption</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <UserCheck className="h-8 w-8 mx-auto mb-2 text-green-600" />
                                <p className="font-medium">KYC Verification</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <Shield className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                                <p className="font-medium">Audit Trail</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-lg">
                                <Award className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                                <p className="font-medium">Carbon Standards</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    const OnboardingView = () => {
        const [onboardingStep, setOnboardingStep] = useState(1)
        const [verificationStatus, setVerificationStatus] = useState({
            iprs: "pending",
            faceMatch: "pending",
            community: "pending",
            simKyc: "pending",
        })
        const [farmerData, setFarmerData] = useState({
            nationalId: "",
            fullName: "",
            phoneNumber: "",
            cooperativeName: "",
            landSize: "",
            preferredLanguage: "English",
        })

        return (
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Comprehensive Farmer Onboarding</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Complete IPRS-verified registration process with tiered KYC, land mapping, and financial setup.
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Onboarding Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-between mb-4">
                            {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                                <div key={step} className="flex flex-col items-center">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                            step <= onboardingStep ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                    >
                                        {step}
                                    </div>
                                    <span className="text-xs mt-1 text-center">
                    {step === 1 && "Identity"}
                                        {step === 2 && "Farm"}
                                        {step === 3 && "Trees"}
                                        {step === 4 && "Training"}
                                        {step === 5 && "Finance"}
                                        {step === 6 && "Community"}
                                        {step === 7 && "Dashboard"}
                  </span>
                                </div>
                            ))}
                        </div>
                        <Progress value={(onboardingStep / 7) * 100} className="h-2" />
                    </CardContent>
                </Card>

                <Tabs value={`step-${onboardingStep}`} className="w-full">
                    <TabsList className="grid w-full grid-cols-7 text-xs">
                        <TabsTrigger value="step-1" onClick={() => setOnboardingStep(1)}>
                            Identity
                        </TabsTrigger>
                        <TabsTrigger value="step-2" onClick={() => setOnboardingStep(2)}>
                            Farm
                        </TabsTrigger>
                        <TabsTrigger value="step-3" onClick={() => setOnboardingStep(3)}>
                            Trees
                        </TabsTrigger>
                        <TabsTrigger value="step-4" onClick={() => setOnboardingStep(4)}>
                            Training
                        </TabsTrigger>
                        <TabsTrigger value="step-5" onClick={() => setOnboardingStep(5)}>
                            Finance
                        </TabsTrigger>
                        <TabsTrigger value="step-6" onClick={() => setOnboardingStep(6)}>
                            Community
                        </TabsTrigger>
                        <TabsTrigger value="step-7" onClick={() => setOnboardingStep(7)}>
                            Dashboard
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="step-1" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <UserCheck className="h-5 w-5 mr-2 text-blue-600" />
                                        Identity Capture
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="national-id">National ID Number</Label>
                                        <Input
                                            id="national-id"
                                            placeholder="Enter ID number"
                                            value={farmerData.nationalId}
                                            onChange={(e) => setFarmerData((prev) => ({ ...prev, nationalId: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="full-name">Full Name</Label>
                                        <Input
                                            id="full-name"
                                            placeholder="As per national ID"
                                            value={farmerData.fullName}
                                            onChange={(e) => setFarmerData((prev) => ({ ...prev, fullName: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label>Document Upload</Label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                            <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">Upload National ID/Passport</p>
                                            <Button variant="outline" className="mt-2 bg-transparent">
                                                <Upload className="h-4 w-4 mr-2" />
                                                Upload Document
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label>Selfie Verification</Label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                            <Camera className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">Take selfie for face match</p>
                                            <Button variant="outline" className="mt-2 bg-transparent">
                                                <Camera className="h-4 w-4 mr-2" />
                                                Capture Selfie
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="h-5 w-5 mr-2 text-green-600" />
                                        IPRS Verification Status
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div
                                            className={`flex items-center justify-between p-3 rounded-lg ${
                                                verificationStatus.iprs === "verified"
                                                    ? "bg-green-50 border border-green-200"
                                                    : verificationStatus.iprs === "pending"
                                                        ? "bg-yellow-50 border border-yellow-200"
                                                        : "bg-red-50 border border-red-200"
                                            }`}
                                        >
                                            <div>
                                                <p className="font-medium">IPRS Database Check</p>
                                                <p className="text-sm text-muted-foreground">Government identity verification</p>
                                            </div>
                                            {verificationStatus.iprs === "verified" ? (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            ) : verificationStatus.iprs === "pending" ? (
                                                <Clock className="h-5 w-5 text-yellow-600" />
                                            ) : (
                                                <AlertCircle className="h-5 w-5 text-red-600" />
                                            )}
                                        </div>

                                        <div
                                            className={`flex items-center justify-between p-3 rounded-lg ${
                                                verificationStatus.faceMatch === "verified"
                                                    ? "bg-green-50 border border-green-200"
                                                    : "bg-gray-50 border border-gray-200"
                                            }`}
                                        >
                                            <div>
                                                <p className="font-medium">Face Match & Liveness</p>
                                                <p className="text-sm text-muted-foreground">Biometric verification</p>
                                            </div>
                                            {verificationStatus.faceMatch === "verified" ? (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            ) : (
                                                <Clock className="h-5 w-5 text-gray-400" />
                                            )}
                                        </div>
                                    </div>

                                    <Alert>
                                        <Info className="h-4 w-4" />
                                        <AlertTitle>Tiered KYC System</AlertTitle>
                                        <AlertDescription>
                                            Level 1: Community attestation (basic access)
                                            <br />
                                            Level 2: IPRS verified (full platform access)
                                        </AlertDescription>
                                    </Alert>

                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            setVerificationStatus((prev) => ({ ...prev, iprs: "verified", faceMatch: "verified" }))
                                            setTimeout(() => setOnboardingStep(2), 1000)
                                        }}
                                    >
                                        Start IPRS Verification
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="step-2" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                                        GPS Land Mapping
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="land-size">Total Land Size (Acres)</Label>
                                        <Input
                                            id="land-size"
                                            type="number"
                                            placeholder="Enter land size"
                                            value={farmerData.landSize}
                                            onChange={(e) => setFarmerData((prev) => ({ ...prev, landSize: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label>Land Tenure Documents</Label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                            <FileText className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-500">Upload title deeds/lease agreements</p>
                                            <Button variant="outline" className="mt-2 bg-transparent">
                                                <Upload className="h-4 w-4 mr-2" />
                                                Upload Documents
                                            </Button>
                                        </div>
                                    </div>
                                    <Button className="w-full">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        Start GPS Mapping
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>AI Land Analysis</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                            <span className="text-sm font-medium">Soil Quality Assessment</span>
                                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                Excellent
                                            </Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                            <span className="text-sm font-medium">Water Access</span>
                                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                                                Good
                                            </Badge>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                                            <span className="text-sm font-medium">Slope Analysis</span>
                                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                                Moderate
                                            </Badge>
                                        </div>
                                    </div>
                                    <Alert>
                                        <Satellite className="h-4 w-4" />
                                        <AlertTitle>Satellite Integration</AlertTitle>
                                        <AlertDescription>
                                            Using satellite imagery for land verification and suitability analysis.
                                        </AlertDescription>
                                    </Alert>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="step-3" className="space-y-6 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <TreePine className="h-5 w-5 mr-2 text-green-600" />
                                    Tree Species Selection & Planning
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <Label>Recommended Species</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select species" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eucalyptus">Eucalyptus (Fast Growth)</SelectItem>
                                                <SelectItem value="acacia">Acacia (Nitrogen Fixing)</SelectItem>
                                                <SelectItem value="mahogany">Mahogany (High Value)</SelectItem>
                                                <SelectItem value="mango">Mango (Fruit + Carbon)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label>Expected Saplings</Label>
                                        <Input type="number" placeholder="Number of trees" />
                                    </div>
                                    <div>
                                        <Label>Planting Season</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select season" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="march-may">March - May (Long Rains)</SelectItem>
                                                <SelectItem value="october-december">Oct - Dec (Short Rains)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-4 bg-green-50 rounded-lg">
                                        <h4 className="font-medium text-green-800">Estimated Carbon Potential</h4>
                                        <p className="text-2xl font-bold text-green-600">2.5 tCO2/year</p>
                                        <p className="text-sm text-green-600">Based on species and land size</p>
                                    </div>
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                        <h4 className="font-medium text-blue-800">Projected Revenue</h4>
                                        <p className="text-2xl font-bold text-blue-600">$125/year</p>
                                        <p className="text-sm text-blue-600">At $50/tCO2 market price</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="step-4" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                                        Training Modules
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label>Preferred Language</Label>
                                        <Select
                                            value={farmerData.preferredLanguage}
                                            onValueChange={(value) => setFarmerData((prev) => ({ ...prev, preferredLanguage: value }))}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="English">English</SelectItem>
                                                <SelectItem value="Swahili">Swahili</SelectItem>
                                                <SelectItem value="Kikuyu">Kikuyu</SelectItem>
                                                <SelectItem value="Luo">Luo</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { title: "Tree Planting Basics", progress: 100, status: "completed" },
                                            { title: "Carbon Credit Fundamentals", progress: 75, status: "in-progress" },
                                            { title: "Sustainable Farming Practices", progress: 0, status: "pending" },
                                            { title: "Mobile App Usage", progress: 0, status: "pending" },
                                        ].map((module, index) => (
                                            <div key={index} className="p-3 border rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-medium">{module.title}</span>
                                                    <Badge
                                                        variant={
                                                            module.status === "completed"
                                                                ? "default"
                                                                : module.status === "in-progress"
                                                                    ? "secondary"
                                                                    : "outline"
                                                        }
                                                    >
                                                        {module.status}
                                                    </Badge>
                                                </div>
                                                <Progress value={module.progress} className="h-2" />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Gamified Learning</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                                        <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
                                        <h3 className="text-xl font-bold">Learning Champion</h3>
                                        <p className="text-sm text-muted-foreground">Complete all modules to unlock rewards</p>
                                        <div className="mt-4 space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Progress</span>
                                                <span>44%</span>
                                            </div>
                                            <Progress value={44} className="h-2" />
                                        </div>
                                    </div>
                                    <Alert>
                                        <Gift className="h-4 w-4" />
                                        <AlertTitle>Completion Rewards</AlertTitle>
                                        <AlertDescription>
                                            Earn bonus credits and priority support upon training completion.
                                        </AlertDescription>
                                    </Alert>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="step-5" className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                                        Payment Setup
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="phone-number">Mobile Money Number</Label>
                                        <Input
                                            id="phone-number"
                                            placeholder="+254 7XX XXX XXX"
                                            value={farmerData.phoneNumber}
                                            onChange={(e) => setFarmerData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label>Mobile Money Provider</Label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <Button variant="outline" className="h-16 flex flex-col bg-transparent">
                                                <Smartphone className="h-6 w-6 mb-1" />
                                                <span className="text-xs">M-PESA</span>
                                            </Button>
                                            <Button variant="outline" className="h-16 flex flex-col bg-transparent">
                                                <Smartphone className="h-6 w-6 mb-1" />
                                                <span className="text-xs">Airtel Money</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <Alert>
                                        <Shield className="h-4 w-4" />
                                        <AlertTitle>SIM-KYC Verification</AlertTitle>
                                        <AlertDescription>
                                            Mobile wallet must be registered under the same ID for security.
                                        </AlertDescription>
                                    </Alert>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Blockchain Wallet</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                                        <Wallet className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                                        <h4 className="font-medium">Secure Wallet Created</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Your carbon credits will be stored securely on blockchain
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Wallet Address:</span>
                                            <code className="text-xs bg-gray-100 px-2 py-1 rounded">0x7a2f...8b4c</code>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Security Level:</span>
                                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                High
                                            </Badge>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full bg-transparent">
                                        <Download className="h-4 w-4 mr-2" />
                                        Backup Wallet Keys
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="step-6" className="space-y-6 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-orange-600" />
                                    Community & Cooperative Verification
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <Label htmlFor="cooperative">Cooperative/Group Name</Label>
                                    <Input
                                        id="cooperative"
                                        placeholder="Enter cooperative name"
                                        value={farmerData.cooperativeName}
                                        onChange={(e) => setFarmerData((prev) => ({ ...prev, cooperativeName: e.target.value }))}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 border rounded-lg">
                                        <h4 className="font-medium mb-2">Local Leader Attestation</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">Chief/Assistant Chief</span>
                                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                    Verified
                                                </Badge>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm">Agricultural Officer</span>
                                                <Badge variant="outline">Pending</Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 border rounded-lg">
                                        <h4 className="font-medium mb-2">Community Trust Score</h4>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600">8.7/10</div>
                                            <p className="text-sm text-muted-foreground">Based on peer reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <Alert>
                                    <Users className="h-4 w-4" />
                                    <AlertTitle>Social Trust Layer</AlertTitle>
                                    <AlertDescription>
                                        Community verification adds an additional layer of trust on top of IPRS verification.
                                    </AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="step-7" className="space-y-6 mt-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                                    Onboarding Complete - Welcome to Carboxyl!
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <Badge className="mb-2 bg-green-600">IPRS Verified</Badge>
                                        <p className="text-sm text-muted-foreground">Full platform access enabled</p>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                                        <Badge className="mb-2 bg-blue-600">Land Registered</Badge>
                                        <p className="text-sm text-muted-foreground">{farmerData.landSize} acres mapped</p>
                                    </div>
                                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                                        <Badge className="mb-2 bg-purple-600">Training Complete</Badge>
                                        <p className="text-sm text-muted-foreground">Ready for tree planting</p>
                                    </div>
                                </div>

                                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                                    <h3 className="text-xl font-bold mb-2">Your Carbon Journey Starts Now</h3>
                                    <p className="text-muted-foreground mb-4">
                                        You're now part of Africa's largest climate finance network. Start planting trees and earning carbon
                                        credits!
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="font-medium">Estimated Annual Earnings:</span>
                                            <p className="text-green-600 font-bold">$125 - $200</p>
                                        </div>
                                        <div>
                                            <span className="font-medium">Carbon Potential:</span>
                                            <p className="text-blue-600 font-bold">2.5 - 4.0 tCO2/year</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button className="flex-1">
                                        <TreePine className="h-4 w-4 mr-2" />
                                        Start Tree Registration
                                    </Button>
                                    <Button variant="outline" className="flex-1 bg-transparent">
                                        <Smartphone className="h-4 w-4 mr-2" />
                                        Download Mobile App
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        )
    }

    const IoTMonitoringView = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">IoT Monitoring Network</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Real-time environmental monitoring using distributed IoT sensors across all participating farms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Active Sensors</p>
                                <p className="text-3xl font-bold text-blue-600">1,247</p>
                                <p className="text-gray-500 text-xs">across 156 farms</p>
                            </div>
                            <Wifi className="h-8 w-8 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Coverage</p>
                                <p className="text-3xl font-bold text-green-600">94%</p>
                                <p className="text-gray-500 text-xs">per farm zone</p>
                            </div>
                            <MapPin className="h-8 w-8 text-green-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Avg Latency</p>
                                <p className="text-3xl font-bold text-purple-600">23ms</p>
                                <p className="text-gray-500 text-xs">2ms lower than yesterday</p>
                            </div>
                            <Zap className="h-8 w-8 text-purple-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Error Rate</p>
                                <p className="text-3xl font-bold text-orange-600">0.3%</p>
                                <p className="text-gray-500 text-xs">per 1000 operations</p>
                            </div>
                            <AlertTriangle className="h-8 w-8 text-orange-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Data Points</p>
                                <p className="text-3xl font-bold text-indigo-600">89.2K</p>
                                <p className="text-gray-500 text-xs">daily readings</p>
                            </div>
                            <BarChart3 className="h-8 w-8 text-indigo-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Farm Coverage Map */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Farm Coverage Map
                            <Button variant="outline" size="sm">
                                <Expand className="h-4 w-4 mr-2" />
                                Expand
                            </Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 h-80 relative overflow-hidden">
                            {/* Simulated map with sensor locations */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-8 gap-2">
                                    {Array.from({ length: 64 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-full ${
                                                Math.random() > 0.1
                                                    ? Math.random() > 0.7
                                                        ? "bg-green-500"
                                                        : "bg-green-400"
                                                    : Math.random() > 0.5
                                                        ? "bg-yellow-400"
                                                        : "bg-red-400"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                <div className="flex items-center space-x-4 text-sm">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                                        <span>Excellent (892)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
                                        <span>Good (234)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-red-400 rounded-full mr-2" />
                                        <span>Issues (121)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Alerts Panel */}
                <Card>
                    <CardHeader>
                        <CardTitle>System Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert className="border-orange-200 bg-orange-50">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            <AlertTitle className="text-orange-800">Maintenance</AlertTitle>
                            <AlertDescription className="text-orange-700">
                                Sensor "SOIL001" needs battery replacement
                            </AlertDescription>
                        </Alert>

                        <Alert className="border-red-200 bg-red-50">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <AlertTitle className="text-red-800">Error</AlertTitle>
                            <AlertDescription className="text-red-700">
                                Temperature sensor in Zone A has undefined error
                            </AlertDescription>
                        </Alert>

                        <Alert className="border-blue-200 bg-blue-50">
                            <Wifi className="h-4 w-4 text-blue-600" />
                            <AlertTitle className="text-blue-800">Connectivity</AlertTitle>
                            <AlertDescription className="text-blue-700">
                                Farm network in Kiambu facing lower connectivity
                            </AlertDescription>
                        </Alert>

                        <Alert className="border-yellow-200 bg-yellow-50">
                            <AlertTriangle className="h-4 w-4 text-yellow-600" />
                            <AlertTitle className="text-yellow-800">Weather Alert</AlertTitle>
                            <AlertDescription className="text-yellow-700">Heavy rainfall expected in Nakuru region</AlertDescription>
                        </Alert>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Environmental Monitoring</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <Droplets className="h-5 w-5 text-blue-500" />
                                    <div>
                                        <p className="font-medium">Soil Moisture</p>
                                        <p className="text-sm text-muted-foreground">Optimal: 60-80%</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-blue-600">78%</p>
                                    <Progress value={78} className="w-20 mt-1" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <Sun className="h-5 w-5 text-yellow-500" />
                                    <div>
                                        <p className="font-medium">Temperature</p>
                                        <p className="text-sm text-muted-foreground">Range: 18-28°C</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-yellow-600">24°C</p>
                                    <Progress value={65} className="w-20 mt-1" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <TreePine className="h-5 w-5 text-green-500" />
                                    <div>
                                        <p className="font-medium">Tree Health Index</p>
                                        <p className="text-sm text-muted-foreground">AI-calculated score</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-green-600">92/100</p>
                                    <Progress value={92} className="w-20 mt-1" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <Cloud className="h-5 w-5 text-gray-500" />
                                    <div>
                                        <p className="font-medium">Humidity</p>
                                        <p className="text-sm text-muted-foreground">Range: 40-70%</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-gray-600">62%</p>
                                    <Progress value={62} className="w-20 mt-1" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Power Usage
                            <Select defaultValue="weekly">
                                <SelectTrigger className="w-24">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="daily">Daily</SelectItem>
                                    <SelectItem value="weekly">Weekly</SelectItem>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold">2,847 kWh</p>
                                <p className="text-sm text-muted-foreground">This week</p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                        <span className="text-sm">Soil Sensors</span>
                                    </div>
                                    <span className="text-sm font-medium">1,247 kWh</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                                        <span className="text-sm">Weather Stations</span>
                                    </div>
                                    <span className="text-sm font-medium">892 kWh</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                        <span className="text-sm">Cameras</span>
                                    </div>
                                    <span className="text-sm font-medium">456 kWh</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full" />
                                        <span className="text-sm">Communication</span>
                                    </div>
                                    <span className="text-sm font-medium">252 kWh</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        All Devices
                        <div className="flex items-center space-x-2">
                            <Input placeholder="Search by name, ID" className="w-48" />
                            <Button variant="outline" size="sm">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                            <Button size="sm">
                                <Plus className="h-4 w-4 mr-2" />
                                Add New
                            </Button>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Device</TableHead>
                                <TableHead>Zone</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Condition</TableHead>
                                <TableHead>Connectivity</TableHead>
                                <TableHead>Uptime</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div>
                                        <p className="font-medium">Soil Sensor</p>
                                        <p className="text-sm text-muted-foreground">SOIL001</p>
                                    </div>
                                </TableCell>
                                <TableCell>Zone A</TableCell>
                                <TableCell>Sensor</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        Excellent
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                        <span className="text-sm">Strong</span>
                                    </div>
                                </TableCell>
                                <TableCell>5 days 2 hrs</TableCell>
                                <TableCell>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div>
                                        <p className="font-medium">Weather Station</p>
                                        <p className="text-sm text-muted-foreground">WS001</p>
                                    </div>
                                </TableCell>
                                <TableCell>Zone A</TableCell>
                                <TableCell>Weather</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                        Moderate
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                                        <span className="text-sm">Moderate</span>
                                    </div>
                                </TableCell>
                                <TableCell>46 days 17 hrs</TableCell>
                                <TableCell>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div>
                                        <p className="font-medium">Tree Camera</p>
                                        <p className="text-sm text-muted-foreground">CAM001</p>
                                    </div>
                                </TableCell>
                                <TableCell>Zone B</TableCell>
                                <TableCell>Camera</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                        Moderate
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                        <span className="text-sm">Strong</span>
                                    </div>
                                </TableCell>
                                <TableCell>74 days 5 hrs</TableCell>
                                <TableCell>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div>
                                        <p className="font-medium">Temp Sensor</p>
                                        <p className="text-sm text-muted-foreground">TEMP001</p>
                                    </div>
                                </TableCell>
                                <TableCell>Zone F</TableCell>
                                <TableCell>Sensor</TableCell>
                                <TableCell>
                                    <Badge variant="destructive" className="bg-red-100 text-red-800">
                                        Low
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                                        <span className="text-sm">Weak</span>
                                    </div>
                                </TableCell>
                                <TableCell>0 hrs</TableCell>
                                <TableCell>
                                    <Badge variant="destructive">Offline</Badge>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div>
                                        <p className="font-medium">Gateway Hub</p>
                                        <p className="text-sm text-muted-foreground">GW001</p>
                                    </div>
                                </TableCell>
                                <TableCell>Zone D</TableCell>
                                <TableCell>Gateway</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        Excellent
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                        <span className="text-sm">Strong</span>
                                    </div>
                                </TableCell>
                                <TableCell>20 days 17 hrs</TableCell>
                                <TableCell>
                                    <Badge variant="default" className="bg-green-100 text-green-800">
                                        Online
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )

    const SmartContractsView = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Smart Contract Automation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Automated carbon credit minting and payment distribution through blockchain smart contracts.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Coins className="h-5 w-5 mr-2 text-green-600" />
                            Carbon Credit Minting
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert className="border-green-200 bg-green-50">
                            <Zap className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                Next minting cycle: December 31, 2024 (7 days remaining)
                            </AlertDescription>
                        </Alert>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Verified Carbon Sequestered</span>
                                <span className="text-green-600 font-bold">1,247 tCO₂</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Credits to be Minted</span>
                                <span className="text-blue-600 font-bold">1,247 tokens</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Estimated Value</span>
                                <span className="text-purple-600 font-bold">$24,940</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Network className="h-5 w-5 mr-2 text-blue-600" />
                            Contract Execution Log
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Contract</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Gas Used</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Payment Distribution</TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-800">
                                            Executed
                                        </Badge>
                                    </TableCell>
                                    <TableCell>0.0023 ETH</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Credit Verification</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Pending</Badge>
                                    </TableCell>
                                    <TableCell>-</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Farmer Registration</TableCell>
                                    <TableCell>
                                        <Badge variant="default" className="bg-green-100 text-green-800">
                                            Executed
                                        </Badge>
                                    </TableCell>
                                    <TableCell>0.0018 ETH</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    const GovernanceView = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Community Governance</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Decentralized decision-making through DAO participation and community voting.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Vote className="h-5 w-5 mr-2 text-purple-600" />
                            Active Proposals
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="p-4 border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium">Increase Payment Rate</h4>
                                    <Badge variant="secondary">Active</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Proposal to increase carbon credit payment rate from $20 to $25 per tCO₂
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Yes: 78%</span>
                                        <span>No: 22%</span>
                                    </div>
                                    <Progress value={78} />
                                    <p className="text-xs text-muted-foreground">Ends in 3 days</p>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium">New Region Expansion</h4>
                                    <Badge variant="outline">Pending</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Expand Carboxyl operations to Tanzania and Uganda
                                </p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Yes: 65%</span>
                                        <span>No: 35%</span>
                                    </div>
                                    <Progress value={65} />
                                    <p className="text-xs text-muted-foreground">Ends in 1 week</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Governance Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <p className="text-2xl font-bold text-purple-600">156</p>
                                <p className="text-sm text-muted-foreground">Active Voters</p>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <p className="text-2xl font-bold text-blue-600">89%</p>
                                <p className="text-sm text-muted-foreground">Participation Rate</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                                <p className="text-2xl font-bold text-green-600">23</p>
                                <p className="text-sm text-muted-foreground">Proposals Passed</p>
                            </div>
                            <div className="text-center p-4 bg-orange-50 rounded-lg">
                                <p className="text-2xl font-bold text-orange-600">4</p>
                                <p className="text-sm text-muted-foreground">Active Proposals</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    const SecurityViewFn = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Security & Fraud Detection</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    AI-powered security systems ensuring platform integrity and preventing fraudulent activities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-red-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-red-100 text-sm font-medium">Threats Blocked</p>
                                <p className="text-3xl font-bold text-white">0</p>
                                <p className="text-red-100 text-xs">this month</p>
                            </div>
                            <Shield className="h-8 w-8 text-red-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-green-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-100 text-sm font-medium">Security Score</p>
                                <p className="text-3xl font-bold text-white">98.7%</p>
                                <p className="text-green-100 text-xs">platform integrity</p>
                            </div>
                            <Lock className="h-8 w-8 text-green-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-blue-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">AI Scans/Day</p>
                                <p className="text-3xl font-bold text-white">24.7K</p>
                                <p className="text-blue-100 text-xs">automated checks</p>
                            </div>
                            <Bot className="h-8 w-8 text-blue-200" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-purple-600 text-white border-0">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-100 text-sm font-medium">Verified Farms</p>
                                <p className="text-3xl font-bold text-white">156</p>
                                <p className="text-purple-100 text-xs">100% authentic</p>
                            </div>
                            <CheckCircle className="h-8 w-8 text-purple-200" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Brain className="h-5 w-5 mr-2 text-blue-600" />
                            AI Fraud Detection
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Alert className="border-green-200 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-800">
                                All systems operational - No threats detected in the last 30 days
                            </AlertDescription>
                        </Alert>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Satellite Image Analysis</span>
                                <Badge variant="default" className="bg-green-100 text-green-800">
                                    Active
                                </Badge>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Payment Pattern Monitoring</span>
                                <Badge variant="default" className="bg-green-100 text-green-800">
                                    Active
                                </Badge>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                                <span className="font-medium">Identity Verification</span>
                                <Badge variant="default" className="bg-green-100 text-green-800">
                                    Active
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Security Metrics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Encryption Level</span>
                                <div className="flex items-center space-x-2">
                                    <Progress value={100} className="w-20" />
                                    <span className="text-sm font-medium">AES-256</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Access Control</span>
                                <div className="flex items-center space-x-2">
                                    <Progress value={95} className="w-20" />
                                    <span className="text-sm font-medium">95%</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Audit Compliance</span>
                                <div className="flex items-center space-x-2">
                                    <Progress value={100} className="w-20" />
                                    <span className="text-sm font-medium">100%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    const RoadmapViewFn = () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Future Roadmap</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Strategic expansion plans and upcoming features for the Carboxyl platform.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Rocket className="h-5 w-5 mr-2 text-blue-600" />
                            2025 Milestones
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <div>
                                    <p className="font-medium">Agroforestry Expansion</p>
                                    <p className="text-sm text-muted-foreground">Scale to 10,000 farmers across East Africa</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <Target className="h-5 w-5 text-blue-600" />
                                <div>
                                    <p className="font-medium">Climate Insurance Integration</p>
                                    <p className="text-sm text-muted-foreground">Parametric insurance for weather risks</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <TrendingUp className="h-5 w-5 text-purple-600" />
                                <div>
                                    <p className="font-medium">Green Financing Platform</p>
                                    <p className="text-sm text-muted-foreground">Direct access to climate finance</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Expansion Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-medium">Q1 2025: Tanzania Launch</p>
                                    <p className="text-sm text-muted-foreground">Expand to 2,000 new farmers</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-medium">Q2 2025: Uganda Integration</p>
                                    <p className="text-sm text-muted-foreground">Partner with local cooperatives</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-medium">Q3 2025: Insurance Launch</p>
                                    <p className="text-sm text-muted-foreground">Climate risk protection</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                                <div>
                                    <p className="font-medium">Q4 2025: Carbon Marketplace</p>
                                    <p className="text-sm text-muted-foreground">Direct buyer-seller platform</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-background">
            <div className="border-b bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Leaf className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">Carboxyl</h1>
                                <p className="text-sm text-muted-foreground">Equitable Climate Finance for Africa</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-muted-foreground flex items-center">
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                Live Demo
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9">
                        <TabsTrigger value="dashboard" className="flex items-center text-xs">
                            <BarChart3 className="h-3 w-3 mr-1" />
                            Dashboard
                        </TabsTrigger>
                        <TabsTrigger value="farmer" className="flex items-center text-xs">
                            <Users className="h-3 w-3 mr-1" />
                            Farmer
                        </TabsTrigger>
                        <TabsTrigger value="onboarding" className="flex items-center text-xs">
                            <UserCheck className="h-3 w-3 mr-1" />
                            Onboarding
                        </TabsTrigger>
                        <TabsTrigger value="iot" className="flex items-center text-xs">
                            <Wifi className="h-3 w-3 mr-1" />
                            IoT
                        </TabsTrigger>
                        <TabsTrigger value="contracts" className="flex items-center text-xs">
                            <Coins className="h-3 w-3 mr-1" />
                            Contracts
                        </TabsTrigger>
                        <TabsTrigger value="governance" className="flex items-center text-xs">
                            <Vote className="h-3 w-3 mr-1" />
                            Governance
                        </TabsTrigger>
                        <TabsTrigger value="security" className="flex items-center text-xs">
                            <Shield className="h-3 w-3 mr-1" />
                            Security
                        </TabsTrigger>
                        <TabsTrigger value="roadmap" className="flex items-center text-xs">
                            <Rocket className="h-3 w-3 mr-1" />
                            Roadmap
                        </TabsTrigger>
                        <TabsTrigger value="tech" className="flex items-center text-xs">
                            <Globe className="h-3 w-3 mr-1" />
                            Tech
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="dashboard" className="mt-8">
                        <DashboardView />
                    </TabsContent>
                    <TabsContent value="farmer" className="mt-8">
                        <FarmerView />
                    </TabsContent>
                    <TabsContent value="onboarding" className="mt-8">
                        <OnboardingView />
                    </TabsContent>
                    <TabsContent value="iot" className="mt-8">
                        <IoTMonitoringView />
                    </TabsContent>
                    <TabsContent value="contracts" className="mt-8">
                        <SmartContractsView />
                    </TabsContent>
                    <TabsContent value="governance" className="mt-8">
                        <GovernanceView />
                    </TabsContent>
                    <TabsContent value="security" className="mt-8">
                        <SecurityViewFn />
                    </TabsContent>
                    <TabsContent value="roadmap" className="mt-8">
                        <RoadmapViewFn />
                    </TabsContent>
                    <TabsContent value="tech" className="mt-8">
                        <TechView />
                    </TabsContent>
                </Tabs>

                <Card className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 overflow-hidden">
                    <CardContent className="p-8 text-center relative">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Climate Finance?</h2>
                            <p className="text-green-50 mb-6">
                                Join us in building a more equitable future where communities profit from protecting the environment.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
                                <Button className="bg-white text-green-600 hover:bg-green-50 font-medium">View Full Prototype</Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent font-medium"
                                >
                                    Contact Team
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CarboxylDemo
